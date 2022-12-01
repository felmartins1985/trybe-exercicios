nome = input("Qual o seu nome? ")
for letra in nome:
    print(letra)

numeros = input("Digite números separados por espaço: ")
numerosSeparados = numeros.split(" ")
soma = 0
for n in numerosSeparados:
    if not n.isdigit():
        print("Você digitou um número inválido")
    soma = soma + int(n)
print(f"A soma deu {soma}")

print("Na mesma", end=" ")
print("linha", end=" ")
print("do que escreve.")
