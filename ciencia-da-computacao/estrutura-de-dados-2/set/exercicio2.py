string = "serdevemuitolegalmasehprecisoestudarbastante"


def longer_no_repeating_substring_len(string):
    biggest = 0
    for index, char in enumerate(string):
        # print(char)
        substr = set()
        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)
    return biggest


print(longer_no_repeating_substring_len("felipe"))
