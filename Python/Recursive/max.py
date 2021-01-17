def max(arr: list[int]) -> int:
    if len(arr) <= 2:
        return arr[0] if arr[0] > arr[1] else arr[1]
    sub_max = max(arr[1:])
    return arr[0] if arr[0] > sub_max else sub_max


print(max([1, 2, 3, 100, 20000, -1]))  # 20000
