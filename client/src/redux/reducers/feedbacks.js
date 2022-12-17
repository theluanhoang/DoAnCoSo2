import { INIT_STATE } from '../../constants';
import { getType, sendFeedback } from '../actions';

export default function feedbackReducers(state = INIT_STATE.feedback, action) {
  switch (action.type) {
    case getType(sendFeedback.sendFeedbackRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(sendFeedback.sendFeedbackSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(sendFeedback.sendFeedbackFailure):
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}