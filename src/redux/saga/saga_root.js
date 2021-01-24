
import { all } from "redux-saga/effects";
import { watchPostNewsletter } from "./newsletter";
import { watchGetBlogPosts, watchGetBlogPost, 
    watchGetBlogPostsFiltered, watchGetSimilarBlogPosts, watchGetHighlightedBlogPosts
 } from "./posts";


export default function* rootSaga() {
  yield all([
    watchGetBlogPosts(),
    watchGetBlogPost(),
    watchGetBlogPostsFiltered(),
    watchGetSimilarBlogPosts(),
    watchGetHighlightedBlogPosts(),
    watchPostNewsletter()
  ]);
}