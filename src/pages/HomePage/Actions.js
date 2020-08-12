import React from 'react';

import "./scss/styles.scss";
import playBtn from "../../icons/play-button.svg"; 
import addBtn from "../../icons/plus.svg"; 

export const Actions = () => {
    return (
        <div className = "actionsWrapper">
            <button className = "action play">
                <img className = "icon play-icon" src = {playBtn} alt = "play-button" />
            </button>
            <button className = "action addToLater">
                <img className = "icon add-icon" src = {addBtn} alt = "add-to-wishlist"/>
            </button>
        </div>
    )
}