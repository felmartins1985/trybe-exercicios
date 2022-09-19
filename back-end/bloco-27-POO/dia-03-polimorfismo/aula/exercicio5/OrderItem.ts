export default class OrderItem{
  private _name: string;
  private _price: number;
  constructor(name: string, price: number){
    this._name = name;
    this._price = price;
  }
  get name(): string {
    return this._name;
  }
  set name(newValue: string) {
    if(newValue.length<3){
      throw new Error('Name must be at least 3 characters long');
    }
    this._name = newValue;
  }
  get price(): number {
    return this._price;
  }
  set price(newValue: number) {
    if(newValue<0){
      throw new Error('Price must be greater than 0');
    }
    this._price = newValue;
  }
}
