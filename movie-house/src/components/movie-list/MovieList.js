import React, {useEffect} from 'react';
import './MovieList.css';
import ConsumerHoc from '../hocs/ConsumerHoc';
import Movie from '../movie/Movie';
import DatePicker from '../date-picker/DatePicker';
import FilterComponent from '../filter-component/FilterComponent';
import CheckBox from '../check-box/CheckBox';

const MovieList = ({value, filterByDate, resetDateFilter}) => {

  useEffect(() => resetDateFilter(), [filterByDate, resetDateFilter]);

  const movieHouses = {
    title: 'Кинотеатры',
    content: <MovieHousesList value={value} />
  }

  return (
    <div className="movie-block-wrapper">
      <div className="filters">
        <DatePicker />      
        <FilterComponent>
          {movieHouses}
        </FilterComponent>
      </div>
      <div className="movie-list-wrapper row">
        <Movies value={value} />
      </div>
    </div>
  )
}

const Movies = ({value}) => {
  function unique(movies) {
    let hash = [];
    let result = [];
    for (let movie of movies) {
      let header = movie.header;
      if (!hash.includes(header)) {
        hash.push(header);
        result.push(movie);
      }
    }
    return result;
  }
  let movies = [...value.movies];
  const chosenMovieHouses = value.chosenMovieHouses;
  const filterByDate = value.filterByDate;
  if (chosenMovieHouses.length) {
    let filteredMovies = [];
    chosenMovieHouses.forEach(el => {
      const allMovies = [...movies];
      const matchedMovies = allMovies.filter(movie => movie.movieHouse === el);
      filteredMovies = filteredMovies.concat(matchedMovies);
    });
    movies = filteredMovies;
  }
  if (filterByDate) {
    const filteredByDateMovies = movies.filter(movie => movie.date[0] === filterByDate);
    movies = filteredByDateMovies;
  }
  movies = unique(movies);
  return movies.map(movie => {
    return <Movie key={movie.id} movie={movie} />
  })
}

const MovieHousesList = ({value}) => {
  return value.movieHouses.map(movieHouse => {
    const isChecked = value.chosenMovieHouses.indexOf(movieHouse.name) > -1 ? true : false;
    return <CheckBox key={movieHouse.id} label={movieHouse.name} isChecked={isChecked}/>
  })
}

export default ConsumerHoc(MovieList);