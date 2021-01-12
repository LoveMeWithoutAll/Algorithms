def findMin(arr):
    min = arr[0]
    min_idx = 0
    for idx in range(1, len(arr)):
        if arr[idx] < min:
            min = arr[idx]
            min_idx = idx
    return min_idx


def selectionSort(arr):
    tmpArr = []
    for idx in range(len(arr)):
        min = findMin(arr)
        tmpArr.append(arr.pop(min))
    return tmpArr


print(selectionSort([5, 3, 6, 2, 10]))  # [2, 3, 5, 6, 10]
