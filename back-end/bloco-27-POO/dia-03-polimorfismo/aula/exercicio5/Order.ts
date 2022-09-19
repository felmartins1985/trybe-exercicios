import Person from "../exercicio1";
import OrderItem from "./OrderItem";

export default class Order {
  private _id: number;
  private _client: Person;
  private _items: OrderItem[];
  private _paymentMethod: string;
  private _discount=0;
  constructor(client: Person, items: OrderItem[], paymentMethod: string, discount?: number){
    this._id = Math.trunc(Date.now() * (Math.random() + 1));
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    if(discount){// <-- IMPORTANTE NAO ESQUECER 
      this._discount = discount;
    }
  }
  get id(): number {
    return this._id;
  }
  get client(): Person {
    return this._client;
  }
  set client(newClient: Person) {
    this._client = newClient;
  }
  get items(): OrderItem[] {
    return this._items;
  }
  set items(newItems: OrderItem[]) {
    if(newItems.length===0){
      throw new Error('Order must have at least one item');
    }
    this._items = newItems;
  }
  get paymentMethod(): string {
    return this._paymentMethod;
  }
  set paymentMethod(newPaymentMethod: string) {
    // if (!['dinheiro', 'cartão', 'vale'].includes(newPaymentMethod)) {
    //   throw new Error('A forma de pagamento não é válida.');
    // }
    if(this._paymentMethod!=='cash' && this._paymentMethod!=='credit' && this._paymentMethod!=='vale'){
      throw new Error('Payment method must be cash or credit or vale');
    }
    this._paymentMethod = newPaymentMethod;
  }
  get discount(): number {
    return this._discount;
  }
  set discount(newDiscount: number) {
    if(newDiscount<0 || newDiscount>1){
      throw new Error('Discount must be beetwen 0 and 1');
    }
    this._discount = newDiscount;
  }
  calculateTotal(): number {
    return this.items
      .reduce((previousValue, item) => previousValue + item.price, 0);
  }
  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}
