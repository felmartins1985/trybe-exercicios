import random

WORDS = [
    "cat",
    "elephant",
    "dog",
    "monkey",
    "duck",
    "chameleon",
    "bear",
    "moose",
    "rooster",
]
MAX_ATTEMPTS = 3


def escrever_palavra_secreta(words):
    palavra_secreta = random.choice(words)
    misturar_palavra = "".join(
        random.sample(palavra_secreta, len(palavra_secreta))
    )
    return palavra_secreta, misturar_palavra


def tentativas_jogador():
    tentativas = []
    for tentativa in range(MAX_ATTEMPTS):
        guess = input("Digite uma palavra: ")
        tentativas.append(guess)
    return tentativas


def checar_resultado(palavra_secreta, tentativas):
    if palavra_secreta in tentativas:
        print(f"Você acertou! a palavra secreta e a {palavra_secreta}")
    else:
        print(f"Você errou! a palavra secreta e a {palavra_secreta}")


if __name__ == "__main__":
    palavra_secreta, misturar_palavra = escrever_palavra_secreta(WORDS)
    print(f"Palavra secreta e a  {misturar_palavra}")
    tentativas = tentativas_jogador()
    checar_resultado(palavra_secreta, tentativas)
