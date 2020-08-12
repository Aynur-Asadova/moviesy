import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';

import "./scss/styles.scss";
import { NavLinks } from './NavLinks';
import { MovieDetails } from './MovieDetails';
import { Actions } from './Actions';
import { getAllMoviesFromDB, selectAllMovies } from '../../redux/movies.reducer';

const settings = {
    dotsClass: "slick-dots",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false
};

const url = "https://beaveronline.co.uk/wp-content/uploads/2018/10/moonlight-film-movie-2016.11548.jpg";

const mapStateToProps = (state) => ({
    movies: selectAllMovies(state),
})

export const HomePage = connect(mapStateToProps, {getAllMoviesFromDB})(({getAllMoviesFromDB, movies}) => {

    useEffect(() => {
        getAllMoviesFromDB();
    }, []);

    const firstFourMovies = movies.slice(0, 4);
    const regex = /[^\w\s]/g;

    const convertSecsToHours = (secs) => {
        if(secs > 3600) {
            const timeToString = ( secs / 3600 ).toString();
            const findHour = timeToString.search(regex);
            const hour = timeToString.slice(0, findHour);
            const mins = timeToString.slice(findHour + 1);
            const flooredMins = Math.floor(mins);
            let returnValue = null;
            flooredMins !== 0 ? returnValue = `${hour}h ${Math.round(mins)}min` : returnValue = `${hour}h`;
            return returnValue;
        } else if (secs % 3600 === 0) {
            const hour = secs / 3600;
            return `${hour}h`;
        }
        else if (secs < 3600){
            const mins = Math.round((secs / 60).toString());
            return `${mins}min`;
        }
    };

    console.log(firstFourMovies)

    return (
        <Slider style = {{overflow: "hidden"}} {...settings}>
            {
                firstFourMovies.map(movie => (
                    <div key = {movie.id} className = "slide__images">
                        <div 
                            style = {{backgroundImage: `url(${movie.slider_bg_photo_url})`}} 
                            className = "b-image"
                        >
                            <div className = "containerLinearGradient">
                                <NavLinks />
                                <MovieDetails
                                    title = {movie.movie_title}
                                    // description = {movie.}
                                    details = {`${convertSecsToHours(movie.time_duration_in_seconds)} | ${movie.movie_genres}`}
                                    imdb = {movie.imdb_total}
                                />
                                <Actions/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    )
});