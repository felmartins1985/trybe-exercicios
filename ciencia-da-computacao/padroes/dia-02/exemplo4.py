lista = list(["Felipe", "Daniella", "Guilherme", "Joao", "Rafael"])
print(lista)

iteracao = iter(lista)

for lis in lista:
    print(next(iter(lis)))
