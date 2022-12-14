lista = list(["Felipe", "Daniella", "Guilherme", "Joao", "Rafael"])
print(lista)

iteracao = iter(lista)

for it in iteracao:
    print(next(it))
