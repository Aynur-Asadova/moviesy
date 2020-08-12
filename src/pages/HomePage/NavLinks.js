import React from 'react';

import "./scss/styles.scss"


export const NavLinks = () => {
    return (
        <nav className = "links">
            <a href = "/movies">Movies</a>
            <a href = "/animations">Animations</a>
            <a href = "/tvseries">TV series</a>
            <a href = "/collections">Collections</a>
            <a href = "/blogs">Blogs</a>
        </nav>
    )
}

// className = "singleLink text-light"