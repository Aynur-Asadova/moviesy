import React, { useState } from 'react';

import "./scss/styles.scss"


export const MovieDetails = ({title, description, details, imdb}) => {
    return (
        <div className = "detailsContainer">
            <p className = "titleOfMovie">
                {title}
            </p>
            <p className = "descOfMovie">
                {description}
            </p>
            <p className = "detailOfMovie">
                {details}
            </p>
            <p className = "imdbOfMovie">
                <span className = "imdb">
                    IMDb
                </span>
                {imdb}
            </p>
        </div>
    )
}