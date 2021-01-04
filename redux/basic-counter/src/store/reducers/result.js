import { STORE_RESULT, DELETE_RESULT } from '../actions/actionTypes';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({_id: new Date(), value: action.result})
            };

        case DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter(r => r._id !== action._id)
            };
        default:
            return state;
    }
};

export default reducer;