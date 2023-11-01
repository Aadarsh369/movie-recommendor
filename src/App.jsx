import React from 'react';
import Header from './components/navbar';
import MovieHighlight from './components/MovieHighlight';
import MovieList from './components/MovieList';
import Footer from './components/footer';
import './index.css';

function App() {
    return (
        <div className="app">
            <Header/>
            <MovieList/>
            <MovieHighlight/>  
            <Footer/>
        </div>
    );
}

export default App;