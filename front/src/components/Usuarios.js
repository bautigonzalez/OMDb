import React from 'react';
import { Link } from 'react-router-dom';

export default ({ usuarios }) => (
<div className="fondo">
  <div className="container peliculas">
  <div>
          <h3>Usuarios</h3>
            <ul>{!usuarios && "No hay usuarios para mostrar"}
                {usuarios && usuarios.map(usuario=>(
                  <Link key={usuario.id} to={`/users/${usuario.id}/favorites`}><li>{usuario.username}</li></Link>
                ))}
            </ul>
      </div>
  </div>
</div>
);

