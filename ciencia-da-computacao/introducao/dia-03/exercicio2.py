def transformar_palavras_em_numeros(frase):
    if not 1 < len(frase) < 30:
        raise ValueError("A frase deve ter entre 1 e 30 caracteres")
    lista = ""
    for letra in frase:
        if letra in "abc":
            lista += "2"
        elif letra in "def":
            lista += "3"
        elif letra in "ghi":
            lista += "4"
        elif letra in "jkl":
            lista += "5"
        elif letra in "mno":
            lista += "6"
        elif letra in "pqrs":
            lista += "7"
        elif letra in "tuv":
            lista += "8"
        elif letra in "wxyz":
            lista += "9"
        elif letra in "-01":
            lista += letra
        else:
            raise ValueError("A frase deve conter apenas letras e números")
    return lista


print(transformar_palavras_em_numeros(str("Felipe").lower()))
