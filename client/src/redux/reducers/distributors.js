import { INIT_STATE } from '../../constants';
import { getType, getDistributors } from '../actions';

export default function distributorsReducers(state = INIT_STATE.distributors, action) {
  switch (action.type) {
    case getType(getDistributors.getDistributorsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getDistributors.getDistributorsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case getType(getDistributors.getDistributorsFailure):
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}