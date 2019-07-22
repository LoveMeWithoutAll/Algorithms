def binary_search(arr, target):
    arr.sort()

    head = 0
    tail = len(arr) - 1

    while tail >= head:
        mid = (head + tail) // 2
        if arr[mid] == target:
            return str(mid) + ' is in there'
        elif arr[mid] > target:
            tail = mid - 1
        elif arr[mid] < target:
            head = mid + 1

    return 'Not found'


if __name__ == '__main__':
    lst = [1, 2, 4, 5, 6, 7, 2, 3, 5, 6, 7, 8]
    print(binary_search(lst, 4))
