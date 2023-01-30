# 1 - OK
# 0 - Instabilidades

valores_coletados1 = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3

valores_coletados2 = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4


def verify_max_time_ok(valores_coletados):
    max_time = 0
    current_time = 0
    for valor in valores_coletados:
        if valor == 1:
            current_time += 1
            # print("current time", current_time)
        else:
            current_time = 0
        if current_time >= max_time:
            max_time = current_time
            # print("max time", max_time)
    return max_time


print(verify_max_time_ok(valores_coletados1))
