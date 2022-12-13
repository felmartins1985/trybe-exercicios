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
        self.index = 0

    def __next__(self):
        if self.index >= len(self.cartas):
            raise StopIteration
        carta = self.cartas[self.index]
        self.index = self.sentido(self.index)
        return carta


class BaralhoAbstrato(ABC):
    @abstractmethod
    def proxima_carta(cls, index):
        pass


class SentidoRegular(BaralhoAbstrato):
    @classmethod
    def proxima_carta(cls, index):
        return index + 1


class SentidoInverso(BaralhoAbstrato):
    @classmethod
    def proxima_carta(cls, index):
        return index - 1


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self.cartas, self.sentido)


baralho = Baralho()
print(baralho._cartas)
