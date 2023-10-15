import React from 'react';
import '../styles/MovieThumbnail.css';

function MovieThumbnail({ movie }) {
    return (
        <div className="movie-thumbnail">
            <img src={movie.imageUrl} alt={movie.title} />
            <h2>{movie.title}</h2>
        </div>
    );
}

export default MovieThumbnail;