friends = [("Rolf", "Bob"), ("Jen", "Bob"), ("Bob", "Rolf")]


def num_people(friends):
    unique_people = set()
    for friend in friends:
        a, b = friend
        unique_people.add(a)
        unique_people.add(b)
    return len(unique_people)


print(num_people(friends))
