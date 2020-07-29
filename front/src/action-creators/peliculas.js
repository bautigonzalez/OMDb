import axios from "axios"
import { SET_PELICULAS, SET_PELICULA } from "../constants"

const setPeliculas = function(peliculas, busqueda){
    return {
        type: SET_PELICULAS,
        peliculas,
        busqueda
    }
}

const setPelicula = function(pelicula){
  return {
      type: SET_PELICULA,
      pelicula
  }
}

export const buscarPeliculas = function (nombre) {
    return function (dispatch, getState) {
      axios.get(`http://www.omdbapi.com/?apikey=20dac387&s=${nombre}`)
        .then(res => {
          dispatch(setPeliculas(res.data.Search, nombre));
        });
    };
  };

  export const buscarPelicula = function (id) {
    return function (dispatch, getState) {
      axios.get(`http://www.omdbapi.com/?apikey=20dac387&i=${id}`)
        .then(res => {
          dispatch(setPelicula(res.data));
        });
    };
  };