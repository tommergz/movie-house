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
          <h1 className="movie-title">{title}</h1>
          <h3 className="movie-price">Цена билета: {price}$</h3>
          <DatePicker />
        </div>
      </div>
      <div className="tixets-head">
        <h2 className="tickets-text py-2 m-0">Билеты: </h2>
      </div>
      <div className="tickets d-flex flex-column">
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

  const movieHouses = [];
  while(movies.length > 0) { 
    const el = movies[0];
    const allMovies = [...movies];
    const movieHouse = allMovies.filter(movie => movie.movieHouse === el.movieHouse); 
    movieHouses.push(movieHouse);
    movies = movies.filter(movie => movie.movieHouse !== el.movieHouse)
  };


  return movieHouses.map(movies => {
    return (
      <div key={movies[0].id + 10} className="movie-house-tickets d-flex py-2">
        <h2 className="movie-house-name">{movies[0].movieHouse}:</h2>
        {movies.map(movie => {
          return <Ticket key={movie.id} movie={movie} />
        })}
      </div>
    )
  })
}

export default ConsumerHoc(TicketInfo);