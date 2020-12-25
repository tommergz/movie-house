import React from 'react';
import './Ticket.css';
// import { Link } from 'react-router-dom';
import ConsumerHoc from '../../hocs/ConsumerHoc';

const Ticket = ({value, movie}) => {
  const {date} = movie;
  return (
    <div className="ticket ml-4 d-flex align-items-center">
      {date[1]}
    </div>
  )
}

export default ConsumerHoc(Ticket)