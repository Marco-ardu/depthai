import serial
import time
com_port = "COM4"
baud_rate = 4800

ser = serial.Serial(com_port, baud_rate)
cmd = bytes.fromhex("01")
if ser.writable():
    ser.write(cmd)

while True:
    time.sleep(1)
    if ser.readable():
        data = ser.read(1)
        print(data)
        data = hex(int.from_bytes(data, byteorder="big"))
        print(data)
    # if data == '0x55':
    #     begin_read = 1