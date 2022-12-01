import json
import csv


def recuperar_livros(arquivo):
    return json.load(arquivo)


def contar_livros_por_categoria(livros):
    categorias = {}
    for livro in livros:
        for categoria in livro["categories"]:
            if not categorias.get(categoria):
                categorias[categoria] = 0
            categorias[categoria] += 1
    return categorias


def calcular_percentagem_por_categoria(livros_por_categoria, total_livros):
    return [
        [categoria, numero_livros / total_livros]
        for categoria, numero_livros in livros_por_categoria.items()
    ]


def escrever_relatorio_csv(arquivo, cabecalho, linhas):
    escritor = csv.writer(arquivo)
    escritor.writerow(cabecalho)
    escritor.writerows(linhas)


if __name__ == "__main__":
    with open("books1.json") as arquivo:
        livros = recuperar_livros(arquivo)
    categorias = contar_livros_por_categoria(livros)
    print(categorias)
    numero_livros = len(livros)
    porcentagem_livros = calcular_percentagem_por_categoria(
        categorias, numero_livros
    )
    cabecalho = ["categoria", "percentagem"]
    with open("relatorio.csv", "w") as arquivo:
        escrever_relatorio_csv(arquivo, cabecalho, porcentagem_livros)
