from linkedList import LinkedList


class Queue:
    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        if len(self.__data) == 0:
            return True
        return False

    def enqueue(self, value):
        self.__data.insert_last(value)

    def dequeue(self):
        return self.__data.remove_first()

    def peek(self):
        return self.__data.get_element_at(0)
