import React from 'react';
import './Cart.css';
import ConsumerHoc from '../hocs/ConsumerHoc';

const Cart = ({value}) => {
  const price = value.cartTotal;
  const cartTotal = price ? 
    <h3>Стоимость: {price}$</h3> : null
  return (
    <div>
      <h1 className="cart-header">Билеты</h1>
      {cartTotal}
      <Tickets value={value} />
    </div>
  )
}

const Tickets = ({value}) => {
  return value.cart.map((ticket, index) => {
    const {
      id,
      ticketId,
      title, 
      movieHouse, 
      price, 
      date,
      place
    } = ticket;
    
    return (
      <div className="chosen-ticket p-2 my-2" key={id + ticketId + new Date(date).valueOf()}>
        <div className="d-flex flex-column">
          <h4 className="m-0">{title}</h4>
          <span>Кинотеатр {movieHouse}</span>
        </div>
        <span>{date[0]} / {date[1]}</span>
        <span> Цена: {price}$</span>
        <span> Место: {place[0] + 1} ряд / {place[1] + 1} место</span>
      </div>
    )
  })
}

export default ConsumerHoc(Cart);