entradas = [1, 2, 3]
saídas = [3, 2, 7]
instante_buscado = 4
resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.


def students_instant(arrivals, exists, instant):
    answer = 0
    students_size = len(arrivals)
    for student in range(students_size):
        if arrivals[student] <= instant <= exists[student]:
            answer += 1
    return answer


print(students_instant(entradas, saídas, instante_buscado))
