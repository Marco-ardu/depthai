from depthai_sdk import OakCamera, RecordType

with OakCamera() as oak:
    # cama = oak.create_camera('cama,c', resolution='1200p')
    # cama.config_color_camera(size=(1200, 800))
    camb = oak.create_camera('left,c', resolution='1200p')
    camb.config_color_camera(ispScale=(2,3))
    camc = oak.create_camera('right,c', resolution='1200p')
    camc.config_color_camera(ispScale=(2,3))

    stereo = oak.create_stereo(left=camb, right=camc)
    stereo.config_undistortion()

    oak.visualize([stereo, camc, stereo.out.rectified_left, stereo.out.rectified_right], fps=True)

    oak.build()
    size = camb.node.getVideoSize()
    # oak.record([cama, camb, camc], 'chonker', RecordType.VIDEO)
    oak.show_graph()
    oak.start(blocking=True)
