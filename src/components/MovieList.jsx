import React from 'react';
import MovieThumbnail from './MovieThumbnail';
import '../styles/MovieList.css';
import img_data from '../Resources/data';


function MovieList() {
    const movies = [
        {id: 1, title: "John Wick Chapter 4", imageUrl: img_data[0].src },
        {id: 2, title: "Avengers - End Game", imageUrl: img_data[1].src},
        {id: 3, title: "Green Lantern", imageUrl: img_data[2].src},
        {id: 4, title: "Parasite", imageUrl: img_data[3].src},
        {id: 5, title: "The Lion King", imageUrl: img_data[4].src},
        {id: 6, title: "Gladiator", imageUrl: img_data[5].src},
        {id: 7, title: "Léon: The Professional", imageUrl: img_data[6].src},
        {id: 8, title: "American History X", imageUrl: img_data[7].src},
        {id: 9, title: "Interstellar", imageUrl: img_data[8].src},
        {id: 10, title: "The Matrix", imageUrl: img_data[9].src},
        {id: 11, title: "Inception", imageUrl: img_data[10].src},
        {id: 12, title: "Forrest Gump", imageUrl: img_data[11].src},
        {id: 13, title: "Pulp Fiction", imageUrl: img_data[12].src},
        {id: 14, title: "The Godfather", imageUrl: img_data[13].src},
        {id: 15, title: "The Shawshank Redemption", imageUrl: img_data[14].src},
        {id: 16, title: "The Dark Knight", imageUrl: img_data[15].src},
        {id: 17, title: "Whiplash", imageUrl: img_data[16].src},
        {id: 18, title: "Oppenheimer", imageUrl: img_data[17].src},
        {id: 19, title: "Top Gun - Maverick", imageUrl: img_data[18].src},
        {id: 20, title: "Arrival", imageUrl: img_data[19].src},
        {id: 21, title: "Joker", imageUrl: img_data[20].src}

        // for (let i = 0; i < img_data.length; i++) {
        //     {id: img_data[i].id, title: img_data[i].title, imageUrl: img_data[i].src },
            
        
    ];

    return (
        <div className="movie-list">
            {movies.map(movie => <MovieThumbnail key={movie.id} movie={movie} />)}
        </div>
    );
}

export default MovieList;