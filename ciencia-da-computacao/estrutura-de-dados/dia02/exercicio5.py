servidores = [[1, 0], [0, 1]]
resultado: 0
# Linhas e colunas são diferentes.

servidores = [[1, 0], [1, 1]]
resultado: 3
# Todos os servidores se comunicam com ao menos um outro servidor.

servidores3 = [[1, 0, 0],
               [1, 0, 0],
               [0, 0, 1]]
resultado: 2
# O servidor de índice (2, 2) não possui nenhum outro na mesma linha e coluna.


def count_servers(grid):
    rows, columns = len(grid), len(grid[0])
    servers_in_rows = [0 for _ in range(rows)]
    servers_in_columns = [0 for _ in range(columns)]
    # print(servers_in_rows, servers_in_columns)
    for row in range(rows):
        for column in range(columns):
            if grid[row][column] == 1:
                servers_in_rows[row] += 1
                servers_in_columns[column] += 1
                print(servers_in_rows, servers_in_columns)
    answer = 0
    for row in range(rows):
        for column in range(columns):
            if grid[row][column] == 1 and (
                servers_in_rows[row] > 1 or servers_in_columns[column] > 1
            ):
                answer += 1
    return answer


print(count_servers(servidores3))
