import {api} from '../api/api';

const SET_STATUS = 'portfolio/portfolio-reducer/SET_STATUS';
const SET_IS_LOADING = 'portfolio/portfolio-reducer/SET_IS_LOADING';

const initialState = {
    requestStatus: null,
    isLoading: false
};

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                requestStatus: action.status
            };
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        default:
            return state;
    }
};

export const setStatus = (status) => ({type: SET_STATUS, status});
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});

export const sendMessage =  (messageData) => async (dispatch) => {
    dispatch(setIsLoading(true));
    const response = await api.sendMessage(messageData);
    dispatch(setStatus(response.status));
};

export default portfolioReducer;