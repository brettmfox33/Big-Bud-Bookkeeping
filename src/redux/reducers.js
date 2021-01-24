import { handleActions } from "redux-actions";
import { actionCreators } from "./actionCreators";

const initialState = {
    blogPosts: [],
    blogPost: null,
    similarBlogPosts: [],
    highlightedBlogPosts: [],
    emailSignupStatus: null
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
        }),
        [actionCreators.getHighlightedBlogPosts]: state => ({
            ...state
        }),
        [actionCreators.getHighlightedBlogPostsSuccess]: (state, action) => ({
            ...state,
            highlightedBlogPosts: action.payload.data 
        }),
        [actionCreators.postNewsletterEmail]: state => ({
            ...state,
            emailSignupStatus: null
        }),
        [actionCreators.postNewsletterEmailSuccess]: state => ({
            ...state,
            emailSignupStatus: 'success'
        }),
        [actionCreators.postNewsletterEmailFailure]: state => ({
            ...state,
            emailSignupStatus: 'failure'
        })
    },
    initialState
  );