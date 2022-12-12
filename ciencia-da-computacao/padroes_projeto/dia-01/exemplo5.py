class Ventilador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0


class Pessoa:
    def __init__(self, nome, saldo):
        self.nome = nome
        self.saldo = saldo
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if ventilador.preco > self.saldo:
            raise ValueError("Saldo insuficiente")

        self.saldo -= ventilador.preco
        self.ventilador = ventilador

    def __str__(self):
        if self.ventilador:
            return f"{self.nome} tem um ventilador"
        return f"{self.nome} nao tem um ventilador"


ventilador_preto = Ventilador("Preto", 200, 127, 200)
pessoa = Pessoa("Joao", 300)
pessoa.comprar_ventilador(ventilador_preto)
print(pessoa)
