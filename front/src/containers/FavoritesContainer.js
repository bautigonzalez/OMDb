import React from 'react';
import Favorites from "../components/Favorites"
import { fetchFavorites, deleteFavorite } from "../action-creators/favorites"
import { connect } from "react-redux"

class FavoritesContainer extends React.Component{

    constructor(props){
      super(props)
      this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        this.props.fetchFavorites(this.props.userId)
    }

    handleDelete(id, userId){
      this.props.deleteFavorite({id: id, userId: userId})
    }

    render(){
        return <Favorites peliculas={this.props.peliculas} handleDelete={this.handleDelete} userId={this.props.userId}/>
    }
}

const mapStateToProps = function(state, ownProps){
  return {
    peliculas: state.favorites.peliculas,
    userId: ownProps.match.params.id
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
    return {
      fetchFavorites: (id)=>dispatch(fetchFavorites(id)),
      deleteFavorite: (movie)=>dispatch(deleteFavorite(movie))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer)