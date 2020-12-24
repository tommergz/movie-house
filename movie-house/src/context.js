import React, {Component} from 'react';
import {moviesData, movieHouses} from './data';

const Context = React.createContext();

class MoviesProvider extends Component {
  state = {
    movies: [],
    movieHouses: [],
    chosenMovieHouses: [],
    filterByDate: '',
    cart: [],
    cartTotal: 0
  }

  componentDidMount() {
    this.setMovies()
  }

  setMovies = () => {
    let movies = [];
    const allMovieHouses = [...movieHouses];
    moviesData.forEach(item => {
      const movie = {...item};
      movies = [...movies, movie]
    });
    this.setState({
      movies: movies,
      movieHouses: allMovieHouses
    })
  }

  toggleCheckboxChange = (e) => {
    const label = e.target.value;
    if (this.state.chosenMovieHouses.indexOf(label) > -1) {
      this.setState(({chosenMovieHouses}) => {
        const index = chosenMovieHouses.findIndex((el) => el === label);
        const newChosenMovieHouses = [
          ...chosenMovieHouses.slice(0, index),
          ...chosenMovieHouses.slice(index + 1)
        ];

        return {
          chosenMovieHouses: newChosenMovieHouses
        }
      }) 
    } else {
      this.setState(({chosenMovieHouses}) => {
        const newChosenMovieHouses = [
          ...chosenMovieHouses,
          label
        ];

        return {
          chosenMovieHouses: newChosenMovieHouses
        }
      })
    }
  }

  filterByDateMethod = (e) => {
    e.preventDefault();
    const newDate = e.target[0].value;
    this.setState({
      filterByDate: newDate
    })
  }

  resetDateFilter = () => {
    this.setState({
      filterByDate: ''
    })
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          toggleCheckboxChange: this.toggleCheckboxChange,
          filterByDateMethod: this.filterByDateMethod,
          resetDateFilter: this.resetDateFilter
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

const MoviesConsumer = Context.Consumer;

export {MoviesProvider, MoviesConsumer}