const initialState = {
    hasMore: true,
    jobs: [],
    jobId: null,
    total: 0,
    currentPage: 1,
    pageLimit: 5,
    fetching: false,
    error: '',
    currentId: null
}

export const JOBS_LOADING = "JOBS_LOADING";
export const JOBS_LOADED = "JOBS_LOADED";
export const JOBS_ERROR = "JOBS_ERROR";
export const JOBS_SET_CURRENT = "JOBS_SET_CURRENT";
export const JOB_SET_ID = "JOB_SET_ID";
export const JOB_ADD_FAV = "JOB_ADD_FAV";
export const JOB_REMOVE_FAV = "JOB_REMOVE_FAV";


const jobsReducer = (state = initialState, action = {}) => {
    let jobs, job;
    switch(action.type) {
        case JOBS_LOADING:
            return {
                ...state,
                fetching: true
            };

        case JOBS_LOADED:
            return {
                ...state,
                total: action.payload.totalItems,
                jobs: [...action.payload.jobs],
                fetching: false
            };

        case JOBS_ERROR:
            return {
                ...state
            };

        case JOBS_SET_CURRENT:
            return {
                ...state
            };
        
        case JOB_SET_ID:
            return {
                ...state, 
                jobId: action.payload.id
            }

        case JOB_ADD_FAV:
            jobs = state.jobs.slice();
            job = jobs[action.payload.workIndex];
            job.favs.push(action.payload.id);
            jobs[action.payload.workIndex] = job;

            return {
                ...state,
                job: jobs
            };

        case JOB_REMOVE_FAV:
            jobs = state.jobs.slice();
            job = jobs[action.payload.workIndex];
            job.favs.splice(action.payload.favIndex, 1);
            jobs[action.payload.workIndex] = job;

            return {
                ...state,
                jobs: jobs
            }

        default:
            return state;
    }
}

export default jobsReducer;