# def verificar_numeros(*numeros):
#     lista = []
#     for numero in numeros:
#         if numero % 15 == 0:
#             lista.append("FizzBuzz")
#         elif numero % 3 == 0:
#             lista.append("Fizz")
#         elif numero % 5 == 0:
#             lista.append("Buzz")
#         else:
#             lista.append(numero)
#     return lista
def verificar_numeros(numeros):
    lista = []
    for number in range(1, numeros + 1):
        if number % 15 == 0:
            lista.append("FizzBuzz")
        elif number % 3 == 0:
            lista.append("Fizz")
        elif number % 5 == 0:
            lista.append("Buzz")
        else:
            lista.append(number)
    return lista


print(verificar_numeros(15))
