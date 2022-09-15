class Data{
  private _dia: number;
  private _mes: number;
  private _ano: number;
  constructor(dia:number, mes:number, ano:number){
    this._dia = dia;
    this._mes = mes;
    this._ano = ano;
    if (!Data.validateDate(dia, mes, ano)) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;
    } else {
      this._dia = dia;
      this._mes = mes;
      this._ano = ano;
    }
  }
 get dia(): number {
  return this._dia;
}

set dia(value: number) {
  this._dia = value;
}

get mes(): number {
  return this._mes;
}

set mes(value: number) {
  this._mes = value;
}

get ano(): number {
  return this._ano;
}

set year(value: number) {
  this._ano = value;
}
getMonthName(): string {
  const meses=[
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]
  return meses[this._mes-1];
}
anoBissexto(): boolean {
  if(this._ano%4 !==0){
    return true;
  }
  return false
}
compare(novaData: Data): number {
  const dataClasse= `${this._ano}/${this._mes}/${this._dia}`;
  const dataParametro= `${novaData._dia}/${novaData._mes}/${novaData._ano}`
  if(new Date(dataClasse)> new Date(dataParametro)){
    return 1;
  }
  if(new Date(dataClasse)< new Date(dataParametro)){
    return -1;
  }
  return 0;
}

format(dataFormada: string): string {
  const conditions: boolean[]=[
    (!dataFormada.match(/a{2,4}/g)), // verifica se possui o ano na formatação
    (!dataFormada.match(/m{2}/g) && !dataFormada.match(/M{1}/g)), // verifica se tem o mês na formatação
    (!dataFormada.match(/d{2}/g)), // verifica se tem o dia na formatação
  ];
  if (conditions.every((cond) => cond)) {
    throw new Error(`O formato passado é inválido: ${dataFormada}`);
  }
  const day = this._dia > 9 ? this._dia.toString() : `0${this._dia.toString()}`;
  const month = this._mes > 9 
      ? this._mes.toString() 
      : `0${this._mes.toString()}`;
  const year = this._ano.toString();

    const dateFormatting = dataFormada
      .replace('dd', day)
      .replace('mm', month)
      .replace('M', this.getMonthName())
      .replace('aaaa', year)
      .replace('aa', year.substr(-2));

    return dateFormatting;
}

private static validateDate(day: number, month: number, year: number)
    : boolean {
    const dateStr = `${year}-${month}-${day}`;

    if (new Date(dateStr).getDate() !== day) return false;

    return true;
  }
};

/////////////////
// Para testar!

const testDate = new Data(29, 1, 1989);

console.log(testDate);
console.log('Dia: ', testDate.dia);
console.log('Mês: ', testDate.mes);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.ano);
console.log('É ano bissexto: ', testDate.anoBissexto() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));

const otherDate = new Data(30, 1, 2021);

const compared = testDate.compare(otherDate);

const compareStates = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

// data inválida
// const invalidDate = new Data(31, 2, 2021);

// console.log('Teste data inválida: ', invalidDate);

// // formato inválido
// console.log(invalidDate.format('a m d'));