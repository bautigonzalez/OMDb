import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap"
import "./css/pelicula.css"
import notfound from "./assets/notfound.png"

export default ({ pelicula, handleClick, userId }) => (
    <div className="fondo">
        <div className="container peliculas">
            <div className=" container-flex tituloDiv">
                <span>FULL CAST AN CREW </span>
                <span> TRIVIA </span>
                <span> USER REVIEWS </span>
                <span> OMDbPro </span>
                <h1 id="titulo">{pelicula.Title} <h3> ({pelicula.Year})</h3></h1>
                <p>
                    <span className="letraChica">{pelicula.Runtime}</span>
                    <span className="letraChica">{pelicula.Genre}</span>
                    <span className="letraChica">{pelicula.Released}</span>
                </p>
                <img src={pelicula.Poster!="N/A" ? (pelicula.Poster):(notfound)}/>
            </div>
            <p id="plot">{pelicula.Plot}</p>
            <p class="nombres"><strong>Director: </strong><span> {pelicula.Director}</span></p>
            <p class="nombres"><strong>Escritores: </strong><span> {pelicula.Writer}</span></p>
            <p class="nombres"><strong>Actores: </strong><span> {pelicula.Actors}</span></p>
            <Button id="agregarButton" onClick={()=>{handleClick(pelicula.Title, pelicula.imdbID, userId)}}>
             +Agregar a favoritos</Button>
        </div>
    </div>
);

