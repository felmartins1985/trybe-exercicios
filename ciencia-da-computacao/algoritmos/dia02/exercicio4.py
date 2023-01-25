def mdc(a, b):
    if b == 0:
        return a
    else:
        return mdc(b, a % b)  # 20 10
        # return mdc(b, a % b) # 10 0


print(mdc(10, 20))
