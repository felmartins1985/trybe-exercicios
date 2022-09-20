import Order from './Order';
import OrderItem from './OrderItem';
import Person from "../exercicio1";

export default class OrderRepository{
  _orders: Order[]=[];
  addOrder(order: Order): void{
    this._orders.push(order);
  }
  removeOrder(order: Order): void{
    const remove= this._orders.filter((item)=> item.id!==order.id);
    this._orders=remove;
  }
  listByCliente(client: Person): Order[]{
    const list= this._orders.filter((item)=> item.client===client);
    console.log(list,'<--')
    return list;
  }
  listBySortedValue(sort: string): Order[] {
  //retorna a lista de pedidos ordenada do maior valor para o menor ou vice-versa
    if (!['maior', 'menor'].includes(sort)) throw new Error('Valor de ordenação inválido.');

    if (sort === 'menor') {
      return this._orders.sort(
        (orderA, orderB) => {
          if (orderA.calculateTotalWithDiscount() > orderB.calculateTotalWithDiscount()) return 1;

          if (orderA.calculateTotalWithDiscount() < orderB.calculateTotalWithDiscount()) return -1;

          return 0;
        },
      );
    }

    return this._orders.sort(
      (orderA, orderB) => {
        if (orderA.calculateTotalWithDiscount() > orderB.calculateTotalWithDiscount()) return -1;

        if (orderA.calculateTotalWithDiscount() < orderB.calculateTotalWithDiscount()) return 1;

        return 0;
      },
    );
  } 
}

const personFelipe= new Person('Felipe', new Date('1997-12-12'))
// console.log(personFelipe);
const orderItemFelipe= new OrderItem('Hamburguer', 10);
// console.log(orderItemFelipe);
const orderFelipe= new Order(personFelipe, [orderItemFelipe], 'cash', 0.1);
// console.log(orderFelipe);
const orderFelipeRepository= new OrderRepository();
orderFelipeRepository.addOrder(orderFelipe);
orderFelipeRepository.listByCliente(personFelipe);
console.log(orderFelipeRepository);