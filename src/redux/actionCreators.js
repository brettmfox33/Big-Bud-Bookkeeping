import { createActions } from "redux-actions";

export const actionCreators = createActions({
    GET_BLOG_POSTS: () => ({}),
    GET_BLOG_POSTS_SUCCESS: (data) => ({data}),
    GET_BLOG_POST: (id) => ({id}),
    GET_BLOG_POST_SUCCESS: (data) => ({data}),
    GET_BLOG_POSTS_FILTERED: (tags, text) => ({tags, text}),
    GET_BLOG_POSTS_FILTERED_SUCCESS: (data) => ({data}),
    GET_SIMILAR_BLOG_POSTS: (tag, title) => ({tag, title}),
    GET_SIMILAR_BLOG_POSTS_SUCCESS: (data) => ({data})
})