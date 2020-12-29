import React, {Component} from 'react';
import {moviesData, movieHouses} from './data';

const Context = React.createContext();

class MoviesProvider extends Component {
  state = {
    movie: null,
    showMovie: false,
    movies: [...moviesData],
    movieHouses: [...movieHouses],
    chosenMovieHouses: [],
    filterByDate: '',
    firleredTicketsByDate: '',
    cart: [],
    cartTotal: 0,
    tickets: 0
  }

  componentDidMount() {
    this.setMovies()
  }

  setMovies = () => {
    let movies = [];
    const allMovieHouses = [...movieHouses];
    moviesData.forEach(item => {
      const movie = {...item};
      movies.push(movie)
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

  getMovie = id => {
    const movie = this.state.movies.find(movie => movie.id === id);
    return movie;
  }

  showMovieMethod = id => {
    const movie = this.getMovie(id);
    this.setState({
      movie: movie,
      showMovie: true
    })
  }

  closeMovieMethod = () => {
    this.setState({
      showMovie: false
    })
  }

  makeSeatsCopy = (arr) => {
    return arr.map(row => {
      const newRow = [...row]
      return newRow.map(item => {
        return {...item}
      })
    })
  }

  bookingSeat = (movie, newSeats) => {
    let movies = [];

    this.state.movies.forEach(item => {
      const movie = {...item};
      movies.push(movie)
    });

    movies = movies.map(el => {
      if (el.id === movie.id) {
        el.seats = newSeats;
      }
      return el
    })
    return movies;
  }

  changeSeats = (rowIndex, index, seat, movie) => {
    const newSeats = this.makeSeatsCopy([...movie.seats]);
    if (seat === true) {
      newSeats[rowIndex][index].empty = 'chosen';
      this.setState(({tickets}) => {
        const movies = this.bookingSeat(movie, newSeats);
        const updatedMovie = movies.find(item => item.id === movie.id);
        return {
          movie: updatedMovie,
          movies: movies,
          tickets: tickets + 1
        }
      })
    } else {
      newSeats[rowIndex][index].empty = true;
      this.setState(({tickets}) => {
        const movies = this.bookingSeat(movie, newSeats);
        const updatedMovie = movies.find(item => item.id === movie.id);
        return {
          movie: updatedMovie,
          movies: movies,
          tickets: tickets - 1
        }
      })
    }
  }

  addToCart = (seats, movie) => {
    const tickets = [];
    seats.forEach((row, index) => {
      let rowIndex = index;
      row.forEach((el, index) => {

        if (el.empty === 'chosen') {
          const myCart = this.state.cart;
          const movieIdx = myCart.findIndex(
            (el) => el.id === movie.id && 
            el.place[0] === rowIndex && 
            el.place[1] === index
          );
          if (movieIdx === -1) tickets.push({...movie, place: [rowIndex, index], ticketId: rowIndex * 10 + index});
        }
      });
    });
    const totalPrice = tickets.length * movie.price;

    this.setState(({cart, cartTotal}) => {
      return {
        cart: cart.concat(tickets),
        cartTotal: cartTotal + totalPrice
      }
    })
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          toggleCheckboxChange: this.toggleCheckboxChange,
          filterByDateMethod: this.filterByDateMethod,
          resetDateFilter: this.resetDateFilter,
          showMovieMethod: this.showMovieMethod,
          closeMovieMethod: this.closeMovieMethod,
          changeSeats: this.changeSeats,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

const MoviesConsumer = Context.Consumer;

export {MoviesProvider, MoviesConsumer}