const emptyAuth = {
    logged: false,
    jwt:'',
    user:{},
    isFetching:false,
    error:'',
    signing:false,
    redirect:false
}

const initialState = {
    ...emptyAuth,
    ...(JSON.parse(localStorage.getItem("store_auth")))
}

export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_FETCHING_FAILED = "LOGIN_FETCHING_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FETCH = "LOGIN_FETCH";
export const LOGOUT = "LOGOUT";
export const JWT_INVALID = "JWT_INVALID";

export const SIGNIN_FETCHING = "SIGNIN_FETCHING";
export const SIGNIN_FETCHING_FAILED = "SIGNIN_FETCHING_FAILED";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_END = "SIGNIN_END";

const authReducer = (state=initialState, action={}) => {
switch(action.type){
    case LOGIN_FETCHING:
        return { ...state, isFetching: true };
    case LOGIN_FETCHING_FAILED:
        return { ...state, isFetching: false };
    case LOGIN_SUCCESS:
        const newState = {...state, ...action.payload, isFetching: false, logged: true};
        localStorage.setItem("store_auth", JSON.stringify(newState));
        return { ...newState};
    case LOGIN_FETCH:
        console.log("FETCH: " + initialState);
        return {...initialState};
    case LOGOUT:
        localStorage.setItem("store_auth", null);
        return { ...initialState };
    case JWT_INVALID:
        return { ...emptyAuth, redirect:action.payload.to };
    case SIGNIN_FETCHING:
        return { ...state };
    case SIGNIN_FETCHING_FAILED:
        return { ...state };
    case SIGNIN_SUCCESS:
        return { ...state };
    case SIGNIN_END:
        return { ...state };
    default:
        return state;
    }
}

export default authReducer;