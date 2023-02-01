from stack import Stack


def solve_expression(expr):
    stack = Stack()
    # print(expr)
    tokens_list = expr.split(" ")
    # print(tokens_list)
    for token in tokens_list:
        if token == "+":
            # Sum operation
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == "*":
            # multiply operation
            result = stack.pop() * stack.pop()
            stack.push(result)
        else:
            # add number operation
            stack.push(int(token))
    return stack.pop()


print(solve_expression("5 10 + 3 *"))
