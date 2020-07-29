import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from "../components/Login"
import { registrandome } from "../action-creators/user"
import { connect } from "react-redux"

const mapDispatchToProps = function(dispatch, ownProps){
   return {
    registrandome: (username, password)=>{
           dispatch(registrandome(username, password))
           .then(()=>{
                ownProps.history.push("/")
           })
       }
   }
}

class RegisterContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name] : e.target.value})
      }

    handleSubmit(event){
        event.preventDefault()
        this.props.registrandome(this.state.username, this.state.password)
    }
    render(){
        return (<Login 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            username={this.state.username}
            password={this.state.password}
            tipo={"Registrarse"}
            />)
    }
}

export default connect(null, mapDispatchToProps)(RegisterContainer)