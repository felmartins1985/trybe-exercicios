// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;
    // o order ja está todo desestruturado
    // por isso que abaixo eu nao coloco this.props.user, por exemplo
    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;