from exercicio1 import verificar_numeros


def test_verificar_divisor_3():
    assert verificar_numeros(3)[-1] == "Fizz"


def test_verificar_divisor_5():
    assert verificar_numeros(5)[-1] == "Buzz"


def test_verificar_divisor_15():
    assert verificar_numeros(15)[-1] == "FizzBuzz"


def test_verificar_normalidade():
    assert verificar_numeros(2) == [1, 2]
