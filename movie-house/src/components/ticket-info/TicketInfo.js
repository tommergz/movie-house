import React from 'react';
import './TicketInfo.css';
import ConsumerHoc from '../hocs/ConsumerHoc';
import DatePicker from '../date-picker/DatePicker';
import Ticket from './ticket/Ticket';

const TicketInfo = ({header, value}) => {
  const allMovies = [...value.movies]; 
  const movies = allMovies.filter(movie => movie.header === header);
  const {img, title, price, description} = movies[0];

  return (
    <div className="ticket-info-wrapper mt-4 d-flex flex-column">
      <div className="info d-flex">
      <img src={img} alt="poster" className="movie-poster" />
        <div className="movie-description ml-4">
          <h1>{title}</h1>
          <h2>Цена билета: {price}$</h2>
          <DatePicker />
        </div>
      </div>
      <h2 className="my-2">Билеты:</h2>
      <div className="tickets d-flex">
        <Tickets value={value} movies={movies}/>
      </div>
      <p className="annotation mt-4">
        {description}
      </p>
    </div>
  );
}

const Tickets = ({value, movies}) => {
  const filterByDate = value.filterByDate;

  if (filterByDate) {
    const filteredByDateMovies = movies.filter(movie => movie.date[0] === filterByDate);
    movies = filteredByDateMovies;
  }
  return movies.map(movie => {
    return <Ticket key={movie.id} movie={movie} />
  })
}

export default ConsumerHoc(TicketInfo);