import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConsumerHoc from '../hocs/ConsumerHoc';
import Navbar from '../navbar/Navbar';
import MovieList from '../movie-list/MovieList';
import MovieHouses from '../movie-houses/MovieHouses';
import Cart from '../cart/Cart';
import TicketInfo from '../ticket-info/TicketInfo';

function App({value}) {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/"
          render={() => <MovieList filterByDate='' resetDateFilter={value.resetDateFilter} />}
        />
        <Route path="/moviehouses" component={MovieHouses} />
        <Route path="/cart" component={Cart} />
        <Route path="/ticket-info/:header"
          render={({match}) => {
            const {header} = match.params;
            return <TicketInfo header={header} />
          }} 
        />
      </Switch>
    </div>
  );
}

export default ConsumerHoc(App);
