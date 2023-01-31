from node import Node


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.tail_value = None
        self.__length = 0

    def is_empty(self):
        if self.head_value is None:
            return True
        return False

    def insert_first(self, value):
        node = Node(value)
        if self.is_empty():
            self.head_value = node
            self.tail_value = node
        else:
            node.next = self.head_value
            self.head_value = node
            self.head_value.prev = None
        self.__length += 1

    def insert_last(self, value):
        node = Node(value)
        if self.is_empty():
            self.head_value = node
            self.tail_value = node
        else:
            self.tail_value.next = node
            node.prev = self.tail_value
            node.next = None
            self.tail_value = node
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        current_value = self.head_value
        while position > 1:
            current_value = current_value.next
            position -= 1
        next_value = Node(value)
        next_value.next = current_value.next
        next_value.prev = current_value
        current_value.next = next_value
        self.__length += 1

    def remove_first(self):
        if self.is_empty():
            return None
        value_to_be_removed = self.head_value
        self.head_value = self.head_value.next
        self.head_value.prev = None
        value_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        if self.is_empty():
            return None
        value_to_be_removed = self.tail_value
        self.tail_value = self.tail_value.prev
        self.tail_value.next = None
        value_to_be_removed.prev = None
        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):  # position 1
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()
        current_value = self.head_value
        while position > 1:
            current_value = current_value.next
            position -= 1
        value_to_be_removed = current_value.next  # 5
        current_value.next = value_to_be_removed.next  # 4
        value_to_be_removed.next = None  # desconecto ele da lista
        value_to_be_removed.prev = None  # desconecto ele da lista
        self.__length -= 1
        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.head_value
        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
            if value_to_be_returned:
                value_returned = Node(value_to_be_returned.value)
        return value_returned

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length
