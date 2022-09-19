abstract class Character{
  abstract specialMove(): void;
  abstract talk(): void;
}

class MeleeCharacter extends Character{
  private _name: string;
  constructor(name: string){
    super();
    this._name = name;
  }
  specialMove(){
    console.log(`${this._name}special move`);
  }
  talk(){
    console.log(`${this._name} talk`);
  }
}

const meleeCharacter = new MeleeCharacter('Melee');
meleeCharacter.specialMove();
meleeCharacter.talk();

class LongRangeCharacter extends Character{
  private _name:string;
  constructor(name: string){
    super();
    this._name = name;
  }
  specialMove(): void{
    console.log(`Hi, I am ${this._name} and I have a special move`);
  }
  talk(): void{
    console.log(`Hi, I am ${this._name} and I can talk`);
  }
}
function characterPresentation(character: Character) {
  character.talk();
  character.specialMove();
}
const longRangeCharacter = new LongRangeCharacter('Long Range');
characterPresentation(longRangeCharacter);