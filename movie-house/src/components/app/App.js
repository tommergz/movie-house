import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar';
import MovieList from '../movie-list/MovieList';
import MovieHouses from '../movie-houses/MovieHouses';
import Cart from '../cart/Cart';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/moviehouses" component={MovieHouses} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
