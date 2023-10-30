import React from 'react';
import MovieThumbnail from './MovieThumbnail';
import '../styles/MovieList.css';
import img_data from '../Resources/data.js';


function MovieList() {
    const movies = [
        { id: 1, title: "John Wick Chapter 4", imageUrl: img_data[0].src },
        {id: 2, title: "Avengers - End Game", imageUrl: img_data[1].src}
    ];

    return (
        <div className="movie-list">
            {movies.map(movie => <MovieThumbnail key={movie.id} movie={movie} />)}
        </div>
    );
}

export default MovieList;