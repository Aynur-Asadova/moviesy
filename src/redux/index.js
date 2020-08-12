import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import { MODULE_NAME as moviesModuleName, reducer as moviesReducer} from "./movies.reducer.js";

const rootReducer = combineReducers({
    [moviesModuleName]:moviesReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;