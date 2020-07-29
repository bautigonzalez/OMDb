import React from 'react';
import { Link } from 'react-router-dom';
import "./css/peliculas.css"
import notfound from "./assets/notfound.png"

export default ({ peliculas, busqueda }) => (
    <div className="fondo">
        <div className="container peliculas">
            <div className="container-fluid contenido">
            <h4>Resultados para "{busqueda}"</h4>
              <h5>Titulos</h5>
              <ul id="lista">{!peliculas && "No hay peliculas para mostrar"}
                  {peliculas && peliculas.map(pelicula=>(<>
                    <li key={pelicula.imdbID}>
                      <div><img src={pelicula.Poster!="N/A" ? (pelicula.Poster):(notfound)}/><Link to={`/movies/${pelicula.imdbID}`}>{pelicula.Title}</Link> <span> ({pelicula.Year})</span></div>
                      </li>
                  </>))}
              </ul>
            </div>
        </div>
    </div>
);
