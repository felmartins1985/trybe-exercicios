def more_than_twenty_five_percent(array):
    twenty_five_percent = len(array) // 4
    seventy_five_percent = len(array) - twenty_five_percent
    for index, element in enumerate(array[:seventy_five_percent]):
        if element == array[index + twenty_five_percent]:
            return element
    return -1


test = [1, 2, 3, 3, 3, 6, 6, 6, 6, 7, 10]
print(more_than_twenty_five_percent(test))
