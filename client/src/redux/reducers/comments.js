import { INIT_STATE } from '../../constants';
import { getType, comments } from '../actions';

export default function commentsReducers(state = INIT_STATE.comments, action) {
  switch (action.type) {
    case getType(comments.commentsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(comments.commentsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(comments.commentsFailure):
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}