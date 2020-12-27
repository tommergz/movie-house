import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Booking.css';
import logo from '../../assets/icons/clapperboard_cinema.svg';
import ConsumerHoc from '../hocs/ConsumerHoc';

const Booking = ({value}) => {
  const {movie, showMovie, closeMovieMethod} = value;
  const [seats, setSeats] = useState([]);
  const makeSeatsCopy = (arr) => {
    return arr.map(row => {
      const newRow = [...row]
      return newRow.map(item => {
        return {...item}
      })
    })
  }

  useEffect(() => {
    if (movie) {
      const seatsCopy = makeSeatsCopy([...movie.seats]);
      setSeats(seatsCopy)
    }
  }, [movie])

  if (showMovie) {
    const {
      title, 
      movieHouse, 
      price, 
      date
    } = value.movie;

    const changeSeats = (rowIndex, index, seat) => {
      const newSeats = makeSeatsCopy([...seats]);
      if (seat === true) {
        newSeats[rowIndex][index].empty = 'chosen';
        setSeats(newSeats)
      } else {
        newSeats[rowIndex][index].empty = true;
        setSeats(newSeats)
      }
    }

    const orderСancellation = () => {
      const newSeats = makeSeatsCopy([...movie.seats])
      setSeats(newSeats)
    } 

    let count = 0;
    seats.forEach(row => {
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
                    orderСancellation()
                    closeMovieMethod()
                  }
                }
              />
            </Link>

            <div className="d-flex flex-column">
              <h2 className="m-0">{title}</h2>
              <p className="movie-house-title m-0">Кинотеатр {movieHouse}</p>
              <p className="m-0">Дата: {date[0]} / {date[1]}</p>
              <p className="m-0">Количество билетов: {count} Стоимость: {count * price}$</p>
            </div>
          </div>
          <div className="seats d-flex flex-column align-items-center">
            <Seats seats={seats} changeSeats={changeSeats}/>
          </div>
          <i 
            className="close-window far fa-window-close"
            onClick={
              () => {
                orderСancellation()
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

const Seats = ({seats, changeSeats}) => {
  return seats.map((row, index) => {
    let rowIndex = index;
    return (
      <div key={index} className="seats-row d-flex">
        {row.map((seat, index) => {
          return <div key={index}>
            {
              seat.empty ? 
              <Seat 
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

const Seat = ({rowIndex, index, changeSeats, seat}) => {
  const content = seat === 'chosen' ? 'chosen-seat' : 'empty-seat';
  return (
    <div className={content} onClick={() => changeSeats(rowIndex, index, seat)}></div>
  )
}

export default ConsumerHoc(Booking);