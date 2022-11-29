alunos_reprovados = []
with open("file.txt") as alunos:
    for aluno in alunos:
        aluno_array = aluno.split(" ")
        if int(aluno_array[1]) < 6:
            alunos_reprovados.append(f"{aluno_array[0]}")

with open("alunosRecuperacao.txt", "w") as alunosReprovados:
    print(alunos_reprovados)
    alunosReprovados.writelines(alunos_reprovados)
