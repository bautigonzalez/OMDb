import { combineReducers } from "redux"
import peliculasReducer from "./peliculas-reducer"
import usersReducer from "./users-reducer"
import favoritesReducer from "./favorites-reducer"

export default combineReducers({
    peliculas: peliculasReducer,
    usuario: usersReducer,
    favorites: favoritesReducer
})