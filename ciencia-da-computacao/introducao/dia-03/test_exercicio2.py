from exercicio2 import transformar_palavras_em_numeros
import pytest


def test_verificar_abc():
    assert transformar_palavras_em_numeros("abc") == "222"


def test_verificar_def():
    assert transformar_palavras_em_numeros("def") == "333"


def test_verificar_ghi():
    assert transformar_palavras_em_numeros("ghi") == "444"


def test_verificar_jkl():
    assert transformar_palavras_em_numeros("jkl") == "555"


def test_verificar_mno():
    assert transformar_palavras_em_numeros("mno") == "666"


def test_verificar_pqrs():
    assert transformar_palavras_em_numeros("pqrs") == "7777"


def test_verificar_tuv():
    assert transformar_palavras_em_numeros("tuv") == "888"


def test_verificar_wxyz():
    assert transformar_palavras_em_numeros("wxyz") == "9999"


def test_verificar_01():
    assert transformar_palavras_em_numeros("-01") == "-01"


def test_excecao__menos_que_1_caractere():
    with pytest.raises(ValueError):
        transformar_palavras_em_numeros("")


def test_excecao__mais_que_30_caracteres():
    with pytest.raises(ValueError):
        transformar_palavras_em_numeros("a" * 31)


def test_excecao__caractere_invalido():
    with pytest.raises(ValueError):
        transformar_palavras_em_numeros("***@@@")
