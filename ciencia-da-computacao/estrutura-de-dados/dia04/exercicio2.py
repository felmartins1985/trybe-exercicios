from linkedList import LinkedList


class Stack:
    def __init__(self):
        self._data = LinkedList()

    def is_empty(self):
        if len(self._data) == 0:
            return True
        return False

    def push(self, value):
        self._data.insert_last(value)

    def pop(self):
        if self.is_empty():
            return None
        self._data.remove_last()

    def peek(self):
        if self.is_empty():
            return None
        return self._data.get_element_at(len(self._data) - 1)

    def min_value(self):
        if self.is_empty():
            return None
        min_value = self._data.get_element_at(0)
        for elem in self._data:
            if elem < min_value:
                min_value = elem
        return min_value

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "Stack(" + str_items + ")"


# if __name__ == "__main__":
#     elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
#     content_stack = Stack()

#     for elem in elements:
#         content_stack.push(elem)

#     # saída: Stack(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
#     print(content_stack)
#     # saída: 10
#     print(content_stack.size())

#     # saída: 10
#     print(content_stack.peek())
#     # saída: 10, pois a função retorna o elemento que está sendo retirado
#     print(content_stack.pop())

#  saída: 9, pois, após o 10 ter sido removido, o 9 se tornou o elemento
# do topo da pilha
#     print(content_stack.peek())
#     # saída: 9
#     print(content_stack.size())

#     # saída: None, pois a função não retorna nada!
#     print(content_stack.clear())
#     # saída: 0
#     print(content_stack.size())
if __name__ == "__main__":
    elements = [2, 1, 5, 4, 10, 6, 8, 22, 11, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    # saída: 1
    print(content_stack.min_value())
    content_stack.push(-5)
    # saída: -5
    print(content_stack.min_value())
