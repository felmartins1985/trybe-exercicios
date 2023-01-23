def find_first_bad_version(array):
    low_index = 0
    high_index = len(array) - 1

    while high_index >= low_index:
        print(f"o meu low index e {low_index}")
        middle_index = (high_index + low_index) // 2

        if array[middle_index] is False:
            print(f"olha isso {array[middle_index]}")
            high_index = middle_index - 1
            # print(f"o meu low index e {low_index}")
        else:
            low_index = middle_index + 1
            print(f"entrei no else {low_index}")

    return low_index


# array1 = [True, True, True, True, False, False, False]
array2 = [True, True, False, False, False, False, False]

# print("Saída array1:", find_first_bad_version(array1))
print("Saída array2:", find_first_bad_version(array2))
