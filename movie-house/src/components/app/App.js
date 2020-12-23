import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Movies from '../movies/Movies';
import MovieHouses from '../movieHouses/MovieHouses';
import Cart from '../cart/Cart';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route path="/moviehouses" component={MovieHouses} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
