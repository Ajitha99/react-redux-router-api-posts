import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions';
import { Post } from '../components/Post';

const PostPage = ({dispatch, loading, posts, hasErrors}) =>{
    //using dispatch to update the state(store) - so direct dependency in useEffect so it renders

    // All that's left to do at this point is display all three possible states of the page - 
    //whether it's loading, has an error, or successfully retrieved the posts from the API.

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    //show loading, error, or success state
    const renderPosts = () =>{
        console.log(posts)
        if (loading) return <p>loading posts...</p>
        if (hasErrors) return <p>Unable to display posts.</p>
        return posts.map((post) => <Post key = {post.id} post ={post} />)
    }
    return(
        <section>
            <h1>Posts</h1>
            {renderPosts()}
        </section>
    )
}
//we must bring in connect--
//connect is a higher order function that connects redux store to the react component.


const mapStateToProps = (state) =>({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(PostPage);