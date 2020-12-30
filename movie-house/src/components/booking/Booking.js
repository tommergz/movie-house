import React from 'react';
import { Link } from 'react-router-dom';
import './Booking.css';
import logo from '../../assets/icons/clapperboard_cinema.svg';
import ConsumerHoc from '../hocs/ConsumerHoc';

const Booking = ({value}) => {
  const {movie, showMovie, closeMovieMethod, changeSeats} = value;
  // const [chosenTickets, setTickets] = useState(0);
  // const bookingSeat = (seat) => {
  //   if (seat === true) {
  //     setTickets(chosenTickets + 1)
  //   } else {
  //     setTickets(chosenTickets - 1)
  //   }
  // }

  // useEffect(() => {
  //   if (movie) {
  //     setTickets(0)
  //   }
  // }, [movie])

  // const [seats, setSeats] = useState([]);
  // const makeSeatsCopy = (arr) => {
  //   return arr.map(row => {
  //     const newRow = [...row]
  //     return newRow.map(item => {
  //       return {...item}
  //     })
  //   })
  // }

  // useEffect(() => {
  //   if (movie) {
  //     const seatsCopy = makeSeatsCopy([...movie.seats]);
  //     setSeats(seatsCopy)
  //   }
  // }, [movie])

  if (showMovie) {
    const {
      title, 
      movieHouse, 
      price, 
      date
    } = value.movie;

    const {addToCart} = value;

    // const changeSeats = (rowIndex, index, seat) => {
    //   const newSeats = makeSeatsCopy([...seats]);
    //   if (seat === true) {
    //     newSeats[rowIndex][index].empty = 'chosen';
    //     setSeats(newSeats)
    //   } else {
    //     newSeats[rowIndex][index].empty = true;
    //     setSeats(newSeats)
    //   }
    // }

    // const orderСancellation = () => {
    //   const newSeats = makeSeatsCopy([...movie.seats])
    //   setSeats(newSeats)
    // } 

    let count = 0;
    movie.seats.forEach(row => {
      row.forEach(el => {
        if (el.empty === 'chosen') count +=1;
      });
    });

    return (
      <div className="booking-info-wrapper">
        <div className="booking-info mx-auto">
          <div className="header-info d-flex">
            <Link to="/">
              <img 
                src={logo} 
                alt="logo" 
                className="header-navbar-logo mr-3" 
                onClick={
                  () => {
                    closeMovieMethod()
                  }
                }
              />
            </Link>

            <div className="booking-info-block d-flex flex-column">
              <h2 className="m-0">{title}</h2>
              <p className="movie-house-title m-0">Кинотеатр {movieHouse}</p>
              <p className="m-0">Дата: {date[0]} / {date[1]}</p>
              <div className="ticket-price-info d-flex justify-content-between">
                <div className="tickets-price-wrapper d-flex">
                  <p className="price m-0">Количество билетов: {count}</p>
                  <p className="price m-0">Стоимость: {count * price}$</p>
                </div>
                <div className="add-tickets-button">
                  <Link to="/cart">
                    <button onClick={
                      () => {
                        addToCart(movie.seats, movie)
                        closeMovieMethod()
                      }
                    }>
                      Добавить
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="seats d-flex flex-column align-items-center">
            <Seats seats={movie.seats} movie={movie} changeSeats={changeSeats} />
          </div>
          <div className="hint d-flex mb-3">
            <div className="d-flex align-items-center mr-2">
              <div className="empty-seat mr-2"></div><span>- место свободно</span>
            </div>
            <div className="d-flex align-items-center mr-2">
              <div className="booked-seat mr-2"></div><span>- место занято</span>
            </div>
            <div className="d-flex align-items-center mr-2">
              <div className="chosen-seat mr-2"></div><span>- ваш выбор</span>
            </div>
          </div>
          <i 
            className="close-window far fa-window-close"
            onClick={
              () => {
                closeMovieMethod()
              }
            }
          ></i>
        </div>
      </div>
    )
  } else {
    return null
  }
}

const Seats = ({seats, movie, changeSeats}) => {
  return (
    <div>
      <h4 className="screen">Экран</h4>
      {
        seats.map((row, index) => {
          let rowIndex = index;
          return (
            <div key={index} className="seats-row d-flex">
              {row.map((seat, index) => {
                return <div key={index}>
                  {
                    seat.empty ? 
                    <Seat 
                      movie={movie}
                      rowIndex={rowIndex} 
                      index={index} 
                      changeSeats={changeSeats} 
                      seat={seats[rowIndex][index].empty}
                    /> : 
                    <div className="booked-seat"></div>
                  }
                </div>
      
              })}
            </div>
          )
        })
      }
    </div>
  )
}

const Seat = ({movie, rowIndex, index, changeSeats, seat}) => {
  const content = seat === 'chosen' ? 'chosen-seat' : 'empty-seat';
  return (
    <div 
      className={content} 
      onClick={
        () => {
          changeSeats(rowIndex, index, seat, movie)
        }
      }></div>
  )
}

export default ConsumerHoc(Booking);