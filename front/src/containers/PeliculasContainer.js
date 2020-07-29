import React from 'react';
import Peliculas from "../components/Peliculas"
import { connect } from "react-redux"

class PeliculasContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <Peliculas peliculas={this.props.peliculas} busqueda={this.props.busqueda}/>
    }
}

const mapStateToProps = function(state, ownProps){
  return {
    peliculas: state.peliculas.peliculas,
    busqueda: state.peliculas.busqueda
  }
}

export default connect(mapStateToProps, null)(PeliculasContainer)