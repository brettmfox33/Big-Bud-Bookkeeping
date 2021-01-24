import { actionCreators } from "../actionCreators";
import {call, put, takeEvery} from "@redux-saga/core/effects";
import { postNewsletterEmail } from "../../api/newsletter";

// Post newsletter email for signup
export function* watchPostNewsletter() {
    yield takeEvery(actionCreators.postNewsletterEmail, postNewsletterEmailSignup);
}

function* postNewsletterEmailSignup(action) {
    try {
        yield call(postNewsletterEmail, action.payload.email);
        yield put(actionCreators.postNewsletterEmailSuccess());
    }
    catch(e) {
        yield put(actionCreators.postNewsletterEmailFailure());
    }
}