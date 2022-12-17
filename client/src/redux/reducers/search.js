import { INIT_STATE } from '../../constants';
import { getType, search } from '../actions';

export default function searchReducers(state = INIT_STATE.search, action) {
    switch (action.type) {
        case getType(search.searchRequest):
            return {
                ...state,
                isLoading: true,
                key: action.payload,
            };
        case getType(search.searchSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };

        case getType(search.searchFailure):
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}