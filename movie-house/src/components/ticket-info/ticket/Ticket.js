import React from 'react';
import './Ticket.css';
// import { Link } from 'react-router-dom';
import ConsumerHoc from '../../hocs/ConsumerHoc';

const Ticket = ({value, movie}) => {
  const {date} = movie;
  return (
    <div className="ticket mr-4">
      <span>
        {date[0]}
      </span>
      <span> / </span>
      <span>
        {date[1]}
      </span>
    </div>
  )
}

export default ConsumerHoc(Ticket)