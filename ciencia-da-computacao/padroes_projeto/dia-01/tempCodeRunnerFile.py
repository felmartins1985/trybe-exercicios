class TV:
    def __init__(self, _tamanho):
        self._volume = 50
        self._canal = 1
        self._tamanho = _tamanho
        self._ligada = False

    def aumentar_volume(self):
        if self._volume < 99:
            self._volume += 1

    def diminuir_volume(self):
        if self._volume > 0:
            self._volume -= 1

    def modificar_canal(self, canal):
        if not self.canal < canal < 100:
            raise ValueError("Canal inválido")
        self._canal = canal

    def ligar_desligar(self):
        self._ligada = not self._ligada


LG = TV(50)
print(LG.aumentar_volume())