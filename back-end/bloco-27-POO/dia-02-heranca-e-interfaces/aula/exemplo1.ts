class Animal {
  /*
    Ao invés de declarar os atributos antes do construtor, receber parâmetros
    no construtor e colocá-los nos atributos da classe, se não formos
    validar, podemos utilizar uma forma simplificada de escrita, simplesmente
    colocando o modificador de visibilidade na frente
    do nome do parâmetro no construtor

    Exemplo:    
    public x: number
    constructor(x: number) { this.x = x }

    Pode ser substituído por:
    constructor(public x: number) { }

  */
  constructor(public name: string, protected birthDate: Date) { }

  get age() {
    /*Para operar com datas, vamos operar somente com milissegundos. Uma data
    é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
    const timeDiff = Math.abs(
      Date.now() -
      new Date(this.birthDate).getTime()
    );

    /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
    Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}

class Mammal extends Animal {
  walk() {
    console.log(`${this.name} está andando!`);
  }
}

const tiger = new Mammal(
  'Tigre',
  new Date(Date.parse('May 03, 2020')),
);

const main = (animal: Animal) => {
  console.log(animal.age);
  // animal.walk();
}

main(tiger);
tiger.walk();

/*
Saída (código rodado em Mar/2022):
1
Tigre está andando!
*/
class Bird extends Animal {
  fly() {
    console.log(`${this.name} está voando!`);
  }
  showBirthDate() {
    console.log(this.birthDate); // ERRO! birthDate é privado e não é visível pra subclasse Bird.
    // agora, se for colocado como protected, sera possivel de ser modificado pelas subclasses
  }
}

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Jun 07, 2017')),
);

console.log(parrot.age);
parrot.fly();

/////////////////////NAO FUNCIONA
// class Animal {
//   constructor(protected birthDate: Date) { }
// }
// class Bird extends Animal {
//   constructor(public name: string) { } // ERRO: constructor deve respeitar o contrato da superclasse
// }

/////////////////////////////FUNCIONA
// class Animal {
//   constructor(protected birthDate: Date) { }
// }
// class Bird extends Animal {
//   constructor(public name: string) {
//     super(new Date());
//   }
// }