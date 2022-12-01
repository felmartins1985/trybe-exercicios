numeros = input("Digite números separados por espaço: ")
numeros_separados = numeros.split(" ")


def verificar_numeros_e_somar(numeros_separados):
    soma = 0
    for n in numeros_separados:
        if not n.isdigit():
            print(f"Voce digitou um número inválido: {n}")
        soma += int(n)
    return soma


print(verificar_numeros_e_somar(numeros_separados))
