def quick_sort(arr: list) -> list:
    if len(arr) < 2:
        return arr

    pivot = arr[0]
    lesser = [i for i in arr[1:] if i <= pivot]
    greater = [i for i in arr[1:] if i > pivot]

    return quick_sort(lesser) + [pivot] + quick_sort(greater)


print(quick_sort([5, 2, 7, 12, 97, 444]))  # 2, 5, 7, 12, 97, 444
