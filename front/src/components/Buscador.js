import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import {Button, Navbar, Nav, Form, FormControl, NavDropdown, Item, Divider } from 'react-bootstrap';
import "./css/buscador.css"
import logo from "./assets/logo.png"
import buscar from "./assets/buscar.png"
import menu from "./assets/menu.png"

export default ({ handleSubmit, setBuscar, valorInput, userId, username, desloguearse }) =>{ 
const handleChange = e =>{
  setBuscar(e.target.value)
}
return (
  <div id="buscador">
      <Navbar id="navbar" variant="dark">
        <div className="container">
          <Navbar.Brand><Link to="/home"><img id="logo" src={logo}/></Link></Navbar.Brand>
          <Nav className="mr-auto"> 
          <img id="menuImg" src={menu}/>
            <NavDropdown className="link" title="Menú" id="collasible-nav-dropdown">
                <NavDropdown.Item><Link className="dlink" to="/home">Home</Link></NavDropdown.Item>
                <NavDropdown.Item><Link className="dlink" to="/users">Usuarios</Link></NavDropdown.Item>
              </NavDropdown>  
            <Form onSubmit={handleSubmit} inline>
              <FormControl 
              type="text" 
              className="mr-sm-2"
              id="buscar"
              placeholder="Buscar en OMDb"
              value={valorInput}
              onChange={handleChange}
              />
              <Button id="buscarButton"type="submit"><img id="buscarImg" src={buscar}/></Button>
            </Form>
          </Nav>
          {userId ? (<>
            <Nav.Link className="link"><Link className="link" to={`/users/${userId}/favorites`}>Mis favoritos</Link></Nav.Link>
            <Nav.Link className="link"><Link className="link" to="/home" onClick={desloguearse}>Cerrar sesión</Link></Nav.Link>
            </>) : (<>
            <Nav.Link className="link"><Link className="link" to="/login">Iniciar sesión</Link></Nav.Link>
            </>)
            }
        </div>
    </Navbar>
  </div>
)
};