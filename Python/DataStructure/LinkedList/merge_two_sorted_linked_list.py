# 매일프로그래밍(https://mailprogramming.com/subscribe)
#
# 두개의 정렬된(sorted) 정수 링크드리스트(linked list)가 주어지면, 두 리스트를 합친 정렬된 링크드리스트를 만드시오.
#
# Given two sorted integer linked lists, merge the two linked lists. Merged linked list must also be sorted.
#
# 예제)
# Input: 1->2->3, 1->2->3
# Output: 1->1->2->2->3->3
#
# Input: 1->3->5->6, 2->4
# Output: 1->2->3->4->5->6


def merge_two_list(list1, list2):
    result = []

    iter1 = iter(list1)
    iter2 = iter(list2)

    pointer1 = next(iter1)
    pointer2 = next(iter2)

    while True:
        if pointer1 == float("inf") and pointer2 == float("inf"):
            break

        if pointer1 < pointer2:
            result.append(pointer1)
            pointer1 = next(iter1, float("inf"))
        if pointer1 > pointer2:
            result.append(pointer2)
            pointer2 = next(iter2, float("inf"))

    return result

if __name__ == '__main__':
    list1 = [1, 3, 5, 6]
    list2 = [2, 4]
    result = merge_two_list(list1, list2)
    print(result)