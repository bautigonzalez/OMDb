import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Buscador from "../components/Buscador"
import { buscarPeliculas } from "../action-creators/peliculas"
import { deslogueandome } from "../action-creators/user"
import { connect } from "react-redux"
import { withRouter } from "react-router"

const mapStateToProps = function(state, ownProps){
    return {
        userId: state.usuario.usuario.id,
        username: state.usuario.usuario.username
    }
}

const mapDispatchToProps = function(dispatch, ownProps){
    return {
        buscarPeliculas: (buscar)=>{
            dispatch(buscarPeliculas(buscar))
        },
        deslogueandome: ()=>dispatch(deslogueandome())
        
    }
}

class BuscadorContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            buscar: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setBuscar = this.setBuscar.bind(this);
        this.desloguearseClick = this.desloguearseClick.bind(this);
    }

    setBuscar(valor){
        this.setState({ buscar: valor})
    }

    handleSubmit(event){
        event.preventDefault()
        if(this.state.buscar){
            this.props.buscarPeliculas(this.state.buscar)
            this.props.history.push("/movies")
            this.setState({
                buscar: ""
            })
        }
    }

    desloguearseClick(){
        this.props.deslogueandome()
    }


    render(){
        return (<Buscador handleSubmit={this.handleSubmit} setBuscar={this.setBuscar} valorInput={this.state.buscar} userId={this.props.userId} username={this.props.username} desloguearse={this.desloguearseClick}/>)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BuscadorContainer))