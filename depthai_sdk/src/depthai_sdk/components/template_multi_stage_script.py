import time
msgs = dict()
cntr = 0
def add_msg(msg, name, seq = None):
    global msgs
    if seq is None:
        seq = msg.getSequenceNum()
    seq = str(seq)
    ${DEBUG}node.warn(f"New msg {name}, seq {seq}")

    # Each seq number has it's own dict of msgs
    if seq not in msgs:
        msgs[seq] = dict()
    msgs[seq][name] = msg

    # To avoid freezing (not necessary for this ObjDet model)
    if 15 < len(msgs):
        ${DEBUG}node.warn(f"Removing first element! len {len(msgs)}")
        msgs.popitem() # Remove first element

def get_msgs():
    global msgs
    seq_remove = [] # Arr of sequence numbers to get deleted
    for seq, syncMsgs in msgs.items():
        seq_remove.append(seq) # Will get removed from dict if we find synced msgs pair
        # Check if we have both detections and color frame with this sequence number
        if len(syncMsgs) == 2: # 1 frame, 1 detection
            for rm in seq_remove:
                del msgs[rm]
            ${DEBUG}node.warn(f"synced {seq}. Removed older sync values. len {len(msgs)}")
            return syncMsgs # Returned synced msgs
    return None

def correct_bb(bb):
    if bb.xmin < 0: bb.xmin = 0.001
    if bb.ymin < 0: bb.ymin = 0.001
    if bb.xmax > 1: bb.xmax = 0.999
    if bb.ymax > 1: bb.ymax = 0.999
    return bb

while True:
    time.sleep(0.001) # Avoid lazy looping

    frame = node.io['frames'].tryGet()
    if frame is not None:
        add_msg(frame, 'frames')

    dets = node.io['detections'].tryGet()
    if dets is not None:
        add_msg(dets, 'detections')

    rec = node.io['recognition'].tryGet()
    if rec is not None:
        cntr -= 1
        ${DEBUG}node.warn(f"Recognition results received. cntr {cntr}")

    sync_msgs = get_msgs()
    if sync_msgs is not None:
        img = sync_msgs['frames']
        dets = sync_msgs['detections']
        if 10 < cntr:
            ${DEBUG}node.warn(f"NN too slow, skipping frame. Cntr {cntr}")
            continue # If recognition model is too slow
        for i, det in enumerate(dets.detections):
            ${CHECK_LABELS}
            cfg = ImageManipConfig()
            correct_bb(det)
            cfg.setCropRect(det.xmin, det.ymin, det.xmax, det.ymax)
            ${DEBUG}node.warn(f"Sending {i + 1}. det. Det {det.xmin}, {det.ymin}, {det.xmax}, {det.ymax}")
            cfg.setResize(${WIDTH}, ${HEIGHT})
            cfg.setKeepAspectRatio(False)
            node.io['manip_cfg'].send(cfg)
            node.io['manip_img'].send(img)
            cntr += 1
            ${DEBUG}node.warn(f"Frame sent to recognition NN. cntr {cntr}")