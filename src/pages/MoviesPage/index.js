import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SwiperCore, { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { getAllMoviesFromDB, selectAllMovies } from '../../redux/movies.reducer';
import "./scss/styles.scss"

SwiperCore.use([Navigation, A11y]);

const mapStateToProps = (state) => ({
    allMovies: selectAllMovies(state),
});

export const MoviesPage = connect(mapStateToProps, {getAllMoviesFromDB})(({getAllMoviesFromDB, allMovies}) => {
    
    useEffect(() => {
        getAllMoviesFromDB();
    }, []);

    console.log(allMovies);
    return (
      <div className = "sliderContainer">
        <Swiper
          slidesPerView={"auto"}
          navigation
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    );
})

