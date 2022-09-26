from typing import Union, List, Callable
from queue import Empty, Queue
from abc import ABC, abstractmethod
import depthai as dai

from .visualizer_helper import FPS
from ..classes.packets import FramePacket


class StreamXout:
    stream: dai.Node.Output
    name: str # XLinkOut stream name
    def __init__(self, id: int, out: dai.Node.Output):
        self.stream = out
        self.name = f"{str(id)}_{out.name}"

class ReplayStream(StreamXout):
    def __init__(self, name: str):
        self.name = name


class XoutBase(ABC):
    callback: Callable  # User defined callback. Called either after visualization (if vis=True) or after syncing.
    queue: Queue  # Queue to which synced Packets will be added. Main thread will get these
    _streams: List[str]  # Streams to listen for
    _vis: bool = False
    _fps: FPS
    name: str # Other Xouts will override this
    def __init__(self) -> None:
        self._streams = [xout.name for xout in self.xstreams()]

    @abstractmethod
    def xstreams(self) -> List[StreamXout]:
        raise NotImplementedError()

    def setup_base(self, callback: Callable):
        # Gets called when initializing
        self.queue = Queue(maxsize=10)
        self.callback = callback
        self._fps = FPS()

    @abstractmethod
    def newMsg(self, name: str, msg) -> None:
        raise NotImplementedError()

    @abstractmethod
    def visualize(self, packet: FramePacket) -> None:
        raise NotImplementedError()

    # This approach is used as some functions (eg. imshow()) need to be called from
    # main thread, and calling them from callback thread wouldn't work.
    def checkQueue(self, block=False) -> None:
        """
        Checks queue for any available messages. If available, call callback. Non-blocking by default.
        """
        try:
            packet = self.queue.get(block=block)
            if packet is not None:
                self._fps.next_iter()
                if self._vis:
                    self.visualize(packet)
                else:
                    # User defined callback
                    self.callback(packet)
        except Empty:  # Queue empty
            pass