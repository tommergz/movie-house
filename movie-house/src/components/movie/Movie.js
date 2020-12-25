import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';
import ConsumerHoc from '../hocs/ConsumerHoc';

const Movie = ({value, movie}) => {
  const {
    // id, 
    // movieHouse, 
    // title, 
    header,
    // description, 
    // seats,
    // inCart,
    // count,
    // price,
    // date,
    img
  } = movie;
  return (
    <div className="movie col-9 col-md-6 col-lg-3 my-3">
      <Link to={`/ticket-info/${header}`}>
        <img src={img} alt="poster" className="poster" />
      </Link>
    </div>
  )
}

export default ConsumerHoc(Movie);