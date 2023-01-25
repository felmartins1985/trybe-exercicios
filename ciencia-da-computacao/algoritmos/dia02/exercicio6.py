# def reverse(list):
#     reversed_list = []
#     for item in list:
#         reversed_list.insert(0, item)

#     return reversed_list


def reverse(list):
    if len(list) < 2:
        return list
    else:
        print(reverse(list[1:]) + [list[0]])
        return reverse(list[1:]) + [list[0]]


print(reverse([1, 2, 3, 4, 5]))

# [1, 2, 3, 4, 5]
# [2, 3, 4, 5]
# [3, 4, 5]
# [4, 5]
# [5]

#
