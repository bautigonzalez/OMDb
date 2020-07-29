import { SET_PELICULAS, SET_PELICULA } from '../constants';

const initialState = { 
  peliculas: [],
  pelicula: {},
  busqueda: ""
 };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_PELICULAS: 
       return Object.assign({}, state, { peliculas: action.peliculas, busqueda: action.busqueda  });
    case SET_PELICULA: 
       return Object.assign({}, state, { pelicula: action.pelicula });
    default: 
       return state;
  }
}