import React from "react";
import NameFilter from './NameFilter'
import RatingFilter from './RatingFilter'
import MovieList from './MovieList'
import './MovieApp.css'
/*
const inception ={
    id:inception,
    title: 'Inception',
    rating: 5,
    image: 'https://www.warnerbros.com/sites/default/files/styles/key_art_270x400/public/inception_keyart.jpg?itok=7jXiglyb',
    year:2010
}
const kingkong ={
    id:kingkong,
    title: 'KingKong',
    rating: 4,
   year :2006
}
const titanic ={
    id:titanic,
    title: 'Titanic',
    rating: 2,
   year :1992
}

const moviesToDisplaye=[inception,kingkong,titanic]
*/
const MovieApp = () => (


    <div className="movie-app">
        <header className="movie-app-header">
            <NameFilter />
            <RatingFilter />
        </header>
        <main className="movie-app-main">
            <MovieList />
        </main>
    </div>

)


export default MovieApp
