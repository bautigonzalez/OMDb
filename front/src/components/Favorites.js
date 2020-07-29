import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default ({ peliculas, handleDelete, userId }) => (
  <div className="fondo">
      <div className="container peliculas">
          <div className="container-fluid contenido">
            <h3>Favoritos</h3>
            <ul>{!peliculas && "No hay peliculas para mostrar"}
                {peliculas && peliculas.map(pelicula=>(<>
                  <Link key={pelicula.imdbID} to={`/movies/${pelicula.imdbID}`}><li>{pelicula.title}</li></Link>
                  <Button variant="danger" onClick={()=>{handleDelete(pelicula.imdbID, userId)}}>Quitar</Button> 
                </>))}
            </ul>
          </div>
      </div>
  </div>
);