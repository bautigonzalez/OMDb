import React from 'react';
import Pelicula from "../components/Pelicula"
import { buscarPelicula } from "../action-creators/peliculas"
import { addFavorite } from "../action-creators/favorites"
import { connect } from "react-redux"

class PeliculaContainer extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
      this.props.buscarPelicula(this.props.id)
    }

    handleClick(title, id, userId){
      this.props.addFavorite({ title: title, id: id, userId: userId })
    }

    render(){
        return <Pelicula pelicula={this.props.pelicula} handleClick={this.handleClick} userId={this.props.userId}/>
    }
}

const mapStateToProps = function(state, ownProps){
  return {
    id: ownProps.match.params.id,
    pelicula: state.peliculas.pelicula,
    userId: state.usuario.usuario.id
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    buscarPelicula: (id)=>(dispatch(buscarPelicula(id))),
    addFavorite: (title, id, userId)=>(dispatch(addFavorite(title, id, userId)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeliculaContainer)