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


def escolhar_palavra_secreta_e_embaralhar(words):
    palavra_aleatoria = random.choice(words)
    palavra_embaralhada = "".join(
        random.sample(palavra_aleatoria, len(palavra_aleatoria))
    )
    return palavra_aleatoria, palavra_embaralhada


def tentativas_jogador():
    tentativas = []
    for tentativa in range(MAX_ATTEMPTS):
        adivinhe = input("Digite uma palavra: ")
        tentativas.append(adivinhe)
    return tentativas


def checar_resultado(palavra_secreta, tentativas):
    if palavra_secreta in tentativas:
        print(f"Você acertou! a palavra secreta e a {palavra_secreta}")
    else:
        print(f"Você errou! a palavra secreta e a {palavra_secreta}")


if __name__ == "__main__":
    (
        palavra_aleatoria,
        palavra_embaralhada,
    ) = escolhar_palavra_secreta_e_embaralhar(WORDS)
    print(f"Palavra secreta e a  {palavra_embaralhada}")
    tentativas = tentativas_jogador()
    checar_resultado(palavra_aleatoria, tentativas)
