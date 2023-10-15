import React from 'react';
import Header from './components/header';
import MovieHighlight from './components/MovieHighlight';
import MovieList from './components/MovieList';
import './index.css';

function App() {
    return (
        <div className="app">
            <Header />
            <MovieHighlight />
            <MovieList />
        </div>
    );
}

export default App;