import React from 'react';
import './Ticket.css';
import ConsumerHoc from '../../hocs/ConsumerHoc';

const Ticket = ({value, movie}) => {
  const {showMovieMethod} = value;
  const {date} = movie;
  return (
    <div 
      className="ticket ml-4 d-flex align-items-center" 
      onClick={() => showMovieMethod(movie.id)}
    >
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