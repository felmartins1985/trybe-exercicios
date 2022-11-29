# def vertical_inverted_ladder(word):
#     for removed_letters in range(len(word)):
#         for index in range(len(word) - removed_letters):
#             print(word[index], end="")
#         print()


# if __name__ == "__main__":
#     name = input("Digite um nome: ")
#     vertical_inverted_ladder(name)


nome = str(input("Digite seu nome: ")).upper()
for i in range(0, len(nome) + 1):
    print(nome[i:])
