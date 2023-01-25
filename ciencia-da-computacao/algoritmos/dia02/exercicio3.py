def maiorinteiro_aux(lista, tamanho):
    print(lista, tamanho)
    if tamanho == 1:
        return lista[0]
    else:
        maior_do_resto_da_lista = maiorinteiro_aux(lista, tamanho - 1)
        # print("1 vez", maior_do_resto_da_lista, lista[tamanho - 1])
        if maior_do_resto_da_lista > lista[tamanho - 1]:
            # print("2 vez", maior_do_resto_da_lista)
            return maior_do_resto_da_lista
        else:
            maior_do_resto_da_lista = lista[tamanho - 1]
    return maior_do_resto_da_lista


def maiorinteiro(lista):
    tamanho = len(lista)
    return maiorinteiro_aux(lista, tamanho)


print(maiorinteiro([1, 21, 300, 4, 57]))
# [1, 21, 300, 4, 57]
# [1, 21, 300, 4]
# [1, 21, 300]
# [1, 21]
# [1]
