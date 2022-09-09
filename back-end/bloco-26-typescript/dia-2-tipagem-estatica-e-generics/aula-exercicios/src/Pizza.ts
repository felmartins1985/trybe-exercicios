import { Common, Vegetarian, Sugar } from "./PizzaFlavorsTypes";
type Slices= 4|6|8;

interface Pizza {
  flavor: string;
  slice: Slices;
}

interface PizzaCommom extends Pizza {
// eu estou dizendo que pizza eh uma base de extensao da PizzaCommom
//Logo, Pizza Commom pode utilizar todos os tipos de pizza
  flavor: Common;
  // slice: Slices; nao posso declarar novamente algo que ja existe na interface
}
interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian;
  // slice: Slices; nao posso declarar novamente algo que ja existe na interface
}
interface PizzaSugar extends Pizza {
  flavor: Sugar;
  // slice: Slices; nao posso declarar novamente algo que ja existe na interface
}

const Calabresa: PizzaCommom={
  flavor: "Calabresa",
  slice: 8,
}

const Marguerita: PizzaVegetarian={
  flavor: "Marguerita",
  slice: 6,
}

const Nutela: PizzaSugar={
  flavor: "Nutela",
  slice: 4,
}

console.log(Calabresa);