import { handleActions } from "redux-actions";
import { actionCreators } from "./actionCreators";

const initialState = {
    blogPosts: [],
    blogPost: null,
    similarBlogPosts: []
}

export default handleActions(
    {
        [actionCreators.getBlogPosts]: state => ({
            ...state
        }),
        [actionCreators.getBlogPostsSuccess]: (state, action) => ({
            ...state,
            blogPosts: action.payload.data 
        }),
        [actionCreators.getBlogPost]: state => ({
            ...state
        }),
        [actionCreators.getBlogPostSuccess]: (state, action) => ({
            ...state,
            blogPost: action.payload.data 
        }),
        [actionCreators.getBlogPostsFiltered]: state => ({
            ...state
        }),
        [actionCreators.getBlogPostsFilteredSuccess]: (state, action) => ({
            ...state,
            blogPosts: action.payload.data
        }),
        [actionCreators.getSimilarBlogPosts]: state => ({
            ...state
        }),
        [actionCreators.getSimilarBlogPostsSuccess]: (state, action) => ({
            ...state,
            similarBlogPosts: action.payload.data
        })
    },
    initialState
  );