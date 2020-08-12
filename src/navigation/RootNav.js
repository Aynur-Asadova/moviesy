import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import "./scss/styles.scss";
import { MoviesPage } from '../pages/MoviesPage';
import { HomePage } from '../pages/HomePage';

export const RootNav = () => {
    return(
        <>
        <nav className = "nav-bar">
            <a className = "logo" href = "/" >LOGO</a>
        </nav>

        <Switch>
            <Route exact path = "/" component = {HomePage} />
            <Route exact path = "/movies" component = {MoviesPage} />
        </Switch>
        </>
    )
}