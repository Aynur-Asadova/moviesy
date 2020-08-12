import axios from "axios";

import { DOMAIN_URL } from "../utils/DOMAIN_URL";
const SET_ALL_MOVIES = "SET_ALL_MOVIES";

const CLEAR_ALL_MOVIES = "CLEAR_ALL_MOVIES";

export const MODULE_NAME = "movies";
export const selectAllMovies = state => state[MODULE_NAME].movies;

const initialState = {
    movies: [],
};

export const reducer  = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_ALL_MOVIES:
            return {
                ...state,
                movies: payload,
            }
        default:
            return state;
    }
};

export const setAllMovies = (payload) => ({
    type: SET_ALL_MOVIES,
    payload,
});

export const getAllMoviesFromDB = () => async(dispatch) => {
    try {
        const response = await axios.get(`${DOMAIN_URL}/movies`);
        if(response) {
            dispatch(setAllMovies(response.data));
        } else {
            dispatch(setAllMovies([]));
        }
    } catch (error) {
        console.log("getAllMoviesFromDB error", error.message)
    }
}
