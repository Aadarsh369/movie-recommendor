import React from 'react';
import MovieThumbnail from './MovieThumbnail';
import '../styles/MovieList.css';

function MovieList() {
    const movies = [
        { id: 1, title: "John Wick Chapter 4", imageUrl: "path-to-image1.jpg" },
        // ... other movies
    ];

    return (
        <div className="movie-list">
            {movies.map(movie => <MovieThumbnail key={movie.id} movie={movie} />)}
        </div>
    );
}

export default MovieList;