# Crie uma função que receba dois números e retorne o maior deles
def maiorNumero(n1, n2):
    if n1 > n2:
        return n1
    else:
        return n2


print(maiorNumero(10, 20))

# Calcule a média aritmética dos valores contidos em uma lista


def media(*numbers):
    soma = 0
    for n in numbers:
        soma += n
    return soma / len(numbers)


print(media(10, 10, 10))


# Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres.


def maiorCaracteres(*strings):
    maior = strings[0]
    for s in strings:
        if len(s) > len(maior):
            maior = s
    return maior


print(maiorCaracteres("be", "joao", "felipe", "leand"))

# 1 litro de tinta pinta 3m²
# tinta e vendida em latas de 18 litros a 80 reais
# Crie uma função que retorne dois valores em uma tupla contendo a quantidade
# de latas de tinta a serem compradas e o preço total a partir do tamanho
# de uma parede (em m²)


def coberturaTintas(metros):
    preco = 80
    litros = metros / 3
    barris = litros // 18
    if barris % 18 > 0:
        barris += 1
    return barris, barris * preco


print(coberturaTintas(100))


#  Crie uma função que receba os três lado de um triângulo e informe qual
# o tipo de triângulo formado ou "não é triangulo", caso não seja possível
# formar um triângulo
# Três lados formam um triângulo quando a soma de quaisquer dois lados
# for maior que o terceiro;


def triangulo(l1, l2, l3):
    if l1 + l2 > l3 and l1 + l3 > l2 and l2 + l3 > l1:
        if l1 == l2 and l2 == l3:
            return "Equilátero"
        elif l1 == l2 or l1 == l3 or l2 == l3:
            return "Isósceles"
        else:
            return "Escaleno"
    else:
        return "Não é triangulo"


print(triangulo(1, 3, 5))
