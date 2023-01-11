class Alarme:
    def __init__(self):
        self.__tarefas = []

    def adicionar_tarefa(self, tarefa):
        self.__tarefas.append(tarefa)

    def acionar_tarefas(self):
        for tarefa in self.__tarefas:
            tarefa.acionar()

    def despertar(self):
        print("Alarme disparado! Acordando...")
        self.acionar_tarefas()

    def __str__(self) -> str:
        return f"Tarefas: {self.__tarefas}\n"


# Interface Observer
class AcenderLuzes:
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_tarefa(self)

    def acionar(self):
        print("Acendendo luzes...")


class PrepararCafe:
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_tarefa(self)

    def acionar(self):
        print("Preparando café...")


class LigarComputador:
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_tarefa(self)

    def acionar(self):
        print("Ligando computador...")


alarme_casa = Alarme()
acender_luzes = AcenderLuzes(alarme_casa)
preparar_cafe = PrepararCafe(alarme_casa)
ligar_computador = LigarComputador(alarme_casa)
alarme_casa.despertar()
print(alarme_casa)