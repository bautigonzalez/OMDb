import React from 'react';
import Usuarios from "../components/Usuarios"
import { fetchUsuarios } from "../action-creators/user"
import { connect } from "react-redux"

class UsuariosContainer extends React.Component{

    componentDidMount(){
      this.props.fetchUsuarios()
    }

    render(){
        return <Usuarios usuarios={this.props.usuarios}/>
    }
}

const mapStateToProps = function(state, ownProps){
  return {
    usuarios: state.usuario.usuarios
  }
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
    fetchUsuarios: ()=>dispatch(fetchUsuarios())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsuariosContainer)