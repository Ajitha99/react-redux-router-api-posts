
import * as actions from '../actions/postsActions'

export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false,
}


//for each action we will write a case that returns the entire state plus whatever change we're making it to
//for eg: for GET_POSTS: all we want to do is tell the app to set loading to true;
export default function postsReducer(state = initialState, action){

    switch(action.type){
        case actions.GET_POSTS:
            return{
                ...state,
                loading: true,
            }
        case actions.GET_POSTS_SUCCESS:
            return{
                posts: action.payload,
                loading: false,
                hasErrors: false
            }
        case actions.GET_POSTS_FAILURE:
            return{
                ...state,
                loading: false,
                hasErrors: true
            }

        default:
            return state
    }
}