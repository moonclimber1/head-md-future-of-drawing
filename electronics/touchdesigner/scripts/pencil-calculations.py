raw_op = op("raw")
val_op = op("values")


def onPostCook(changeOp):
    raw1 = raw_op[2]
    raw2 = raw_op[3]
    u1 = raw1 / 1023.0
    u2 = raw2 / 1023.0

    R1 = 1000.0
    P = 2000.0
    # 18.0

    p2 = (R1 * (u1 - u2) - 5 * P + P * u1) / (u1 + u2 - 10)
    p1 = P - p2
    x = 0

    ratio = p1 / P

    val_op.par.value0 = u1
    val_op.par.value1 = u2
    val_op.par.value2 = p1
    val_op.par.value3 = p2
    val_op.par.value4 = x
    val_op.par.value5 = ratio - 0.5
    return
