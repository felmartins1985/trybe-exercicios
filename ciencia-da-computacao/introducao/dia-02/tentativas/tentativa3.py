alunos_reprovados = []
with open("notas.txt", "r") as alunos:
    for aluno in alunos:
        alunos_array = aluno.split(" ")
        print(alunos_array)
        if int(alunos_array[1]) < 6:
            alunos_reprovados.append(alunos_array[0])
with open("alunos_recuperacao.txt", "w") as reprovados:
    print(alunos_reprovados)
    reprovados.writelines(alunos_reprovados)
