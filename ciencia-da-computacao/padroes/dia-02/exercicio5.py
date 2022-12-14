from abc import ABC, abstractmethod


class ImpostosOrcamento(ABC):
    @abstractmethod
    def calcular(self, valor):
        pass


class ISS(ImpostosOrcamento):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.1


class ICMS(ImpostosOrcamento):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.06


class PIS(ImpostosOrcamento):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.0065


class COFINS(ImpostosOrcamento):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.03


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
        return imposto.calcular(self.valor)


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(ISS)}")
print(f"ICMS: {orcamento.calcular_imposto(ICMS)}")
print(f"PIS: {orcamento.calcular_imposto(PIS)}")
print(f"COFINS: {orcamento.calcular_imposto(COFINS)}")
