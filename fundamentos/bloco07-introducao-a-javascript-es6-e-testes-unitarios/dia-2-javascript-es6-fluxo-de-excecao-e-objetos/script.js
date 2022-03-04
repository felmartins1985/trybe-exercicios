const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.

const deliveryPessoa= order.order.delivery.deliveryPerson;
const consumidor= order.name;
const telefone=order.phoneNumber;
const rua= order.address.street;
const numero= order.address.number;
const apt= order.address.apartment;
  console.log(`Olá ${deliveryPessoa}, entrega para: ${consumidor}, Telefone: ${telefone}, ${rua} ${numero} ${apt}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.
  // Modifique o nome da pessoa compradora.
  // Modifique o valor total da compra para R$ 50,00.
  const consumidor= order.name="Luiz Silva";
  const comida= Object.keys(order.order.pizza);
  const refrigerante= Object.values(order.order.drinks.coke);
  const novoValor=order.payment.total=50;
  console.log(`Olá ${consumidor}, o total do seu pedido de ${comida[0]}, ${comida[1]}, e ${refrigerante[0]} é de R$${novoValor},00 `);
  }

orderModifier(order);