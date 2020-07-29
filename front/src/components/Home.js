import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Carousel } from "react-bootstrap"
import "./css/home.css"

export default () => (
    <div className="container-fluid fondoHome">
        <div className="container-fluid fondoHome">
            <h1 className="letraDorada">Que mirar</h1>
            <h3 className="letraBlanca"> Las favoritas de los fans</h3>
            <h5 className="letraBlancaChica"> Top de la semana</h5>
        </div>
        
        <Carousel>
            <Carousel.Item>
                <div className="row">
                <div className="col-2"><Card>
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg" />
                    <Card.Body>
                        <Card.Title>Entre navajas y secretos</Card.Title>
                        <Link to="/movies/tt8946378"><Button variant="primary">Ver pelicula</Button></Link>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-2"><Card>
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg" />
                    <Card.Body>
                        <Card.Title>Guasón</Card.Title>
                        <Link to="/movies/tt7286456"><Button variant="primary">Ver pelicula</Button></Link>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-2"><Card>
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg" />
                    <Card.Body>
                        <Card.Title>Parásitos</Card.Title>
                        <Link to="/movies/tt6751668"><Button variant="primary">Ver pelicula</Button></Link>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-2"><Card>
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg" />
                    <Card.Body>
                        <Card.Title>1917</Card.Title>
                        <Link to="/movies/tt8579674"><Button variant="primary">Ver pelicula</Button></Link>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-2"><Card>
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" />
                    <Card.Body>
                        <Card.Title>Sueños de libertad</Card.Title>
                        <Link to="/movies/tt0111161"><Button variant="primary">Ver pelicula</Button></Link>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-2" id="bajar"><Card>
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg" />
                    <Card.Body>
                        <Card.Title>Avengers: Endgame</Card.Title>
                        <Link to="/movies/tt4154796"><Button variant="primary">Ver pelicula</Button></Link>
                    </Card.Body>
                    </Card>
                </div>

            </div>
    </Carousel.Item>
    <Carousel.Item>
                <div className="row">
                <div className="col-2"><Card>
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg" />
                    <Card.Body>
                        <Card.Title>El origen</Card.Title>
                        <Link to="/movies/tt1375666"><Button variant="primary">Ver pelicula</Button></Link>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-2"><Card>
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg" />
                    <Card.Body>
                        <Card.Title>Había una vez en Hollywood</Card.Title>
                        <Link to="/movies/tt7131622"><Button variant="primary">Ver pelicula</Button></Link>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-2"><Card>
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BZDhkMjUyYjItYWVkYi00YTM5LWE4MGEtY2FlMjA3OThlYmZhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg" />
                    <Card.Body>
                        <Card.Title>Uncut Gems</Card.Title>
                        <Link to="/movies/tt5727208"><Button variant="primary">Ver pelicula</Button></Link>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-2"><Card>
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg" />
                    <Card.Body>
                        <Card.Title>Batman - El caballero de la noche</Card.Title>
                        <Link to="/movies/tt0468569"><Button variant="primary">Ver pelicula</Button></Link>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-2"><Card>
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" />
                    <Card.Body>
                        <Card.Title>Forrest Gump</Card.Title>
                        <Link to="/movies/tt0109830"><Button variant="primary">Ver pelicula</Button></Link>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-2" id="bajar"><Card>
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg" />
                    <Card.Body>
                        <Card.Title>Jojo Rabbit</Card.Title>
                        <Link to="/movies/tt2584384"><Button variant="primary">Ver pelicula</Button></Link>
                    </Card.Body>
                    </Card>
                </div>

            </div>
    </Carousel.Item>
        </Carousel>
    </div>
);

