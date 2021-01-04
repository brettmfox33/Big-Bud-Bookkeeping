import { actionCreators } from "../actionCreators";
import {call, put, takeEvery} from "@redux-saga/core/effects";
import {getBlogs, getBlog, getBlogsFiltered, getSimilarBlogs, getHighlightedBlogs} from "../../api/posts";

// BLOG POSTS
export function* watchGetBlogPosts() {
    yield takeEvery(actionCreators.getBlogPosts, getBlogPosts);
}

function* getBlogPosts() {
    const response = yield call(getBlogs);
    yield put(actionCreators.getBlogPostsSuccess(response.data));
}

// BLOG POST
export function* watchGetBlogPost() {
    yield takeEvery(actionCreators.getBlogPost, getBlogPost);
}

function* getBlogPost(action) {
    const response = yield call(getBlog, action.payload.id);
    yield put(actionCreators.getBlogPostSuccess(response.data));
}

// BLOG POSTS FILTERED
export function* watchGetBlogPostsFiltered() {
    yield takeEvery(actionCreators.getBlogPostsFiltered, getBlogPostsFiltered);
}

function* getBlogPostsFiltered(action) {
    const response = yield call(getBlogsFiltered, action.payload.tags, action.payload.text);
    yield put(actionCreators.getBlogPostsFilteredSuccess(response.data));
}

// SIMILAR BLOG POSTS
export function* watchGetSimilarBlogPosts() {
    yield takeEvery(actionCreators.getSimilarBlogPosts, getSimilarBlogPosts);
}

function* getSimilarBlogPosts(action) {
    const response = yield call(getSimilarBlogs, action.payload.tag, action.payload.title);
    yield put(actionCreators.getSimilarBlogPostsSuccess(response.data));
}

// HIGHLIGHTED BLOG POSTS
export function* watchGetHighlightedBlogPosts() {
    yield takeEvery(actionCreators.getHighlightedBlogPosts, getHighlightedBlogPosts);
}

function* getHighlightedBlogPosts(action) {
    const response = yield call(getHighlightedBlogs);
    yield put(actionCreators.getHighlightedBlogPostsSuccess(response.data));
}