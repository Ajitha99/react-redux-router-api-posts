import axios from "axios"


//Create Redux action types

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

//Create Redux action creators that return an action

export const getPosts = () =>({
    type: GET_POSTS,
})

export const getPostsSuccess = (posts) =>({
    type: GET_POSTS_SUCCESS,
    payload: posts,
})

export const getPostsFailure =()=>({
    type: GET_POSTS_FAILURE,
})

//combine them all in an async thunk


//Dispatch accepts an object which is used to update the Redux state

export function fetchPosts(){
    return async (dispatch) =>{
        dispatch(getPosts())//starting, getting the post infor
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch(getPostsSuccess(response.data)) //if success, update state
            // console.log(response);
        } catch (error) {
            dispatch(getPostsFailure());
        }
    }
}