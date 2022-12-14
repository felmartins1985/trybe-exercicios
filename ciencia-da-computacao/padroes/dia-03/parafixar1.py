class Calculadora:
    def soma(self, x, y):
        return x + y


class CalculadoraDecoradaIngles:
    def __init__(self, calculadora):
        self.calculadora = calculadora

    def converterNumero(self, numero):
        if not isinstance(numero, str):
            return numero
        # se o numero nao for uma string, retorna o numero como um digito
        return {
            "one": 1,
            "two": 2,
            "three": 3,
            "four": 4,
            "five": 5,
            "six": 6,
            "seven": 7,
            "eight": 8,
            "nine": 9,
            "ten": 10,
        }.get(numero)

        # o get vai pegar esse dicionario e vai
        # retornar o valor da chave que for passada

    def soma(self, x, y):
        return self.calculadora.soma(
            self.converterNumero(x), self.converterNumero(y)
        )


if __name__ == "__main__":
    calculadora = Calculadora()
    print("10 + 20 =")
    calculadora.soma(10, 20)

    calculadoraDecorada = CalculadoraDecoradaIngles(calculadora)
    print("'seis' + 'dois' =", calculadoraDecorada.soma("six", "two"))
