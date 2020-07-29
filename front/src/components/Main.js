import React from 'react';
import BuscadorContainer from "../containers/BuscadorContainer"
import PeliculasContainer from "../containers/PeliculasContainer"
import PeliculaContainer from "../containers/PeliculaContainer"
import LoginContainer from "../containers/LoginContainer"
import RegisterContainer from "../containers/RegisterContainer"
import UsuariosContainer from "../containers/UsuariosContainer"
import FavoritesContainer from "../containers/FavoritesContainer"
import Footer from "../components/Footer"
import Home from "../components/Home"
import { Route, Redirect, Switch } from 'react-router-dom';

export default () => (
  <div id="main">
    <Route path="/" component={BuscadorContainer}/>
    <Switch>
      <Route path="/Home" component={Home}/>
      <Route exact path="/login" component={LoginContainer}/>
      <Route exact path="/register" component={RegisterContainer}/>
      <Route exact path="/movies" component={PeliculasContainer}/>
      <Route exact path="/users" component={UsuariosContainer}/>
      <Route exact path="/users/:id/favorites" component={FavoritesContainer}/>
      <Route path="/movies/:id" component={PeliculaContainer}/>
      <Redirect from="/" to="/home"/>
    </Switch>
    <Footer/>
  </div>
);