import { LOGUEADO, DESLOGUEADO, VIEW_USUARIOS } from '../constants';

const initialState = { 
  usuario: {},
  usuarios: []
 };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case LOGUEADO: 
       return Object.assign({}, state, { usuario: action.username });
    case DESLOGUEADO: 
       return Object.assign({}, state, { usuario: action.username });
   case VIEW_USUARIOS: 
       return Object.assign({}, state, { usuarios: action.usuarios });
    default: 
       return state;
  }
}