
import { combineReducers } from "redux";
import postsReducer from './postsReducers'
//When we have multiple reducers, for eg.. post reducers, comment reducers, like reducers : we will need to combine them


const rootReducer = combineReducers({
    posts: postsReducer,
})

export default rootReducer;