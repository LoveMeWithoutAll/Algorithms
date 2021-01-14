def sum(array):
    if len(array) == 1:
        return array[0]
    a = array.pop()
    b = array.pop()
    array.append(a + b)
    return sum(array)


print(sum([1, 2, 3, 4, 5]))  # 15
