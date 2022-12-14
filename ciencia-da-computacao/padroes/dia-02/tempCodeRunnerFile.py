from abc import ABC, abstractmethod
from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas, sentido):
        self.cartas = cartas
        self.sentido = sentido
        self.index = sentido.posicao

    def __next__(self):
        try:
            carta = self.cartas[self.index]
        except IndexError:
            raise StopIteration()
        else:
            self.index = self.sentido.proxima_carta(self.index)
            return carta


class BaralhoAbstrato(ABC):
    @abstractmethod
    def proxima_carta(cls, index):
        pass


class SentidoRegular(BaralhoAbstrato):
    posicao = 0

    @classmethod
    def proxima_carta(cls, index):
        return index + 1


class SentidoInverso(BaralhoAbstrato):
    posicao = -1

    @classmethod
    def proxima_carta(cls, index):
        return index - 1


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, sentido):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.sentido = sentido

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas, self.sentido)


# print("------------Regular------------")
# for carta in Baralho(SentidoRegular()):
#     print(carta)

print("------------Reverso------------")
for carta in Baralho(SentidoInverso()):
    print(carta)
