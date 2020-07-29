import { ADD_FAVORITE, VIEW_FAVORITE } from '../constants';

const initialState = { 
  peliculas: [],
  pelicula: {}
 };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case VIEW_FAVORITE: 
       return Object.assign({}, state, { peliculas: action.peliculas });
    case ADD_FAVORITE: 
       return Object.assign({}, state, { pelicula: action.pelicula });
    default: 
       return state;
  }
}