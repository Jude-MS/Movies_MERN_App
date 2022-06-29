import React from 'react';
import { Link } from 'react-router-dom';
import './MovieItem.css';

const MovieItem = ({id, imageUrl}) => {
    return (
        <li className="movie-item">
            <Link to={`/api/movies/${id}`}>
                <div className="movie-item__image">
                    <img src={imageUrl} alt="imag" />
                </div>
            </Link>
        </li>
    )
}

export default MovieItem;
