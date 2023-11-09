let img_data = [
    {
        id: 1,
        title: 'John Wick Chapter 4',
        src: 'https://i.etsystatic.com/34853406/r/il/e731a3/4809681245/il_1588xN.4809681245_g8q2.jpg',
        author: 'Netflix',
    }, 
    {
        id: 2,
        title: 'Avengers - End Game',
        src: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
        author: 'Netflix',
    },  
    {
        id: 3,
        title: 'Green Lantern',
        src: 'https://m.media-amazon.com/images/I/91xru2r80bL._AC_UF1000,1000_QL80_.jpg',
        author: 'Netflix'
    }, 
    {
        id: 4,
        title: 'Parasite',
        src: 'https://play-lh.googleusercontent.com/2tzG09I9wzNEavSzkRbwzphgQA8cGAMU2nd-vEPFrGfUYRVB0qTx7Il4yXZvrq_6avOcYOkyzfZjzQNmrlg',
        author: 'Netflix'
    }, 
    {
        id: 5,
        title: 'The Lion King',
        src: 'https://images.moviesanywhere.com/c07276e9473360730fdbc94baebc4236/4692c964-61ba-486d-9c77-939dbfba2f07.jpg',
        author: 'Netflix'
    }, 
    {
        id: 6,
        title: 'Gladiator',
        src: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24674_p_v8_ae.jpg',
        author: 'Netflix'
    }, 
    {
        id: 7,
        title: 'Léon: The Professional',
        src: 'https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg',
        author: 'Netflix'
    }, 
    {
        id: 8,
        title: 'American History X',
        src: 'https://play-lh.googleusercontent.com/a-XBBCAPoKNTXWthJQn02Y8DKwut7ntOjxQq60vXf6ythkcOEjpR3J99vjYmm6GABknb',
        author: 'Netflix'
    }, 
    {
        id: 9,
        title: 'Interstellar',
        src: 'https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF1000,1000_QL80_.jpg',
        author: 'Netflix'
    }, 
    {
        id: 10,
        title: 'The Matrix',
        src: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        author: 'Netflix'
    }, 
    {
        id: 11,
        title: 'Inception',
        src: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_af.jpg',
        author: 'Netflix'
    }, 
    {
        id: 12,
        title: 'Forrest Gump',
        src: 'https://m.media-amazon.com/images/I/71bfKSNKwZL._AC_UF1000,1000_QL80_.jpg',
        author: 'Netflix'
    }, 
    {
        id: 13,
        title: 'Pulp Fiction',
        src: 'https://m.media-amazon.com/images/I/81UTs3sC5hL.jpg',
        author: 'Netflix'
    }, 
    {
        id: 14,
        title: 'The Godfather',
        src: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        author: 'Netflix'
    }, 
    {
        id: 15,
        title: 'The Shawshank Redemption',
        src: 'https://images.fandango.com/ImageRenderer/500/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/21463/shawshankonesheet.jpg',
        author: 'Netflix'
    }, 
    {
        id: 16,
        title: 'The Dark Knight',
        src: 'https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg',
        author: 'Netflix'
    }, 
    {
        id: 17,
        title: 'Whiplash',
        src: 'https://miro.medium.com/v2/resize:fit:1400/1*HygtAUSg3MqQjimu0MQy3Q.jpeg',
        author: 'Netflix'
    }, 
    {
        id: 18,
        title: 'Oppenheimer',
        src: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg',
        author: 'Netflix'
    }, 
    {
        id: 19,
        title: 'Top Gun - Maverick',
        src: 'https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg',
        author: 'Netflix'
    }, 
    {
        id: 20,
        title: 'Arrival',
        src: 'https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg',
        author: 'Netflix'
    }, 
    {
        id: 21,
        title: 'Joker',
        src: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        author: 'Netflix'
    }, 
];
module.exports = img_data;