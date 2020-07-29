import axios from "axios"
import { ADD_FAVORITE, VIEW_FAVORITE, DELETE_FAVORITE } from "../constants"

const setFavorite = function(pelicula){
    return {
        type: ADD_FAVORITE,
        pelicula
    }
}

const viewFavorite = function(peliculas){
  return {
      type: VIEW_FAVORITE,
      peliculas
  }
}

export const addFavorite = function (movie) {
    return function (dispatch, getState) {
      axios.post(`/api/favorites/add`, movie)
        .then(res=>res.data)
        .then(movie => {
          dispatch(setFavorite(movie));
        });
    };
  };

  export const fetchFavorites = function (id) {
    return function (dispatch, getState) {
      axios.get(`/api/users/${id}/favorites`)
        .then(res => {
          dispatch(viewFavorite(res.data));
        });
    };
  };

  export const deleteFavorite = function (movie) {
    return function (dispatch, getState) {
      axios.post(`/api/favorites/delete`, movie)
        .then(res=>res.data)
        .then(movies => {
          dispatch(viewFavorite(movies));
        });
    };
  };