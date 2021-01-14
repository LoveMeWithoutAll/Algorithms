def euclidean(a, b):
    if a < b:
        a, b = b, a

    mod = a % b

    if mod == 0:
        return b
    else:
        return euclidean(b, mod)


print(euclidean(78696, 19332))  # 36
