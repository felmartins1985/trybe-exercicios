from collections import Counter


class Estatistica:
    @classmethod
    def media(cls, lista):
        return sum(lista) / len(lista)

    @classmethod
    def mediana(cls, lista):
        lista_ordenada = lista.sort()
        index = len(lista_ordenada) // 2
        if index / 2 == 0:
            return (lista_ordenada[index] + lista_ordenada[index - 1]) / 2
        return lista_ordenada[index]

    @classmethod
    def moda(cls, lista):
        number, _ = Counter(lista).most_common()[0]
        return number
