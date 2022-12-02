from exercicio3 import verificar_email
import pytest


def test_email_valido():
    assert verificar_email("felmartins1985@gmail.com") is None


def test_email_iniciando_numero():
    with pytest.raises(ValueError):
        verificar_email("1@teste.com")


def test_email_analisando_caracteres_username():
    with pytest.raises(ValueError):
        verificar_email("#$%&@teste.com")


def test_email_analisando_caracteres_website():
    with pytest.raises(ValueError):
        verificar_email("teste@#$%&.com")


def test_email_analisando_caracteres_extensao():
    with pytest.raises(ValueError):
        verificar_email("teste@teste.combr")
