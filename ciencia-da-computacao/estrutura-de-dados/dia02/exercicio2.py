# Exemplo 1:
cartas1 = [2, 6, 4, 5]
# cartas por parte = 2

resultado = [2, 4, 6, 5]

# Exemplo 2:
cartas2 = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

resultado = [1, 7, 4, 6, 4, 6]


def shuffle(items):
    answer = []
    divide_carts = len(items) // 2
    # print(divide_carts)
    for cart in range(divide_carts):
        random_cart = items[cart::divide_carts]
        # print(random_cart)
        answer.extend(random_cart)
    return answer


print(shuffle(cartas2))
