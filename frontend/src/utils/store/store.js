import authReducer from './reducers/auth.reducer';
import jobsReducer from './reducers/jobs.reducer';

const mainReducer = (state={}, action={}) => {
    const {auth, jobs} = state;
    return {
        auth:authReducer(auth, action),
        jobs: jobsReducer(jobs, action)
    }
}

export default mainReducer;