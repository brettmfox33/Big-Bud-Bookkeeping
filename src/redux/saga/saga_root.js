
import { all } from "redux-saga/effects";
import { watchGetBlogPosts, watchGetBlogPost, 
    watchGetBlogPostsFiltered, watchGetSimilarBlogPosts } from "./posts";


export default function* rootSaga() {
  yield all([
    watchGetBlogPosts(),
    watchGetBlogPost(),
    watchGetBlogPostsFiltered(),
    watchGetSimilarBlogPosts()
  ]);
}