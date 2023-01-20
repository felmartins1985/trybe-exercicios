def num_pares_it(numeros):
    total_pares = 0
    for numero in range(numeros + 1):
        if numero % 2 == 0 and numero != 0:
            total_pares += 1
    return total_pares


# print(num_pares_it(10))


def num_pares_rec(numero):
    if numero == 0:
        return 0
    elif numero % 2 == 0:
        return 1 + num_pares_rec(numero - 1)
    else:
        return num_pares_rec(numero - 1)


print(num_pares_rec(10))
