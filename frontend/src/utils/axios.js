import axios from 'axios';

const publicAxios = axios.create();

publicAxios.defaults.headers.common['cache-control'] = "no-cache";
publicAxios.defaults.headers.post['Content-Type'] = "no-cache";
publicAxios.defaults.headers.put['Content-Type'] = "no-cache";

const privateAxios = axios.create();

privateAxios.defaults.headers.common['cache-control'] = "no-cache";
privateAxios.defaults.headers.post['Content-Type'] = "no-cache";
privateAxios.defaults.headers.put['Content-Type'] = "no-cache";

export const setJWT = (jwt) => {
    privateAxios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
}

export const setUnAuthInterceptor = (logoutHandler) => {
    privateAxios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            console.log(error);
            if(error.response) {
                switch(error.response.status) {
                    case 401:
                        logoutHandler();
                        break;
                    default:
                        console.log(error);
                }
            }
            else {
                console.log(error);
            }
            return Promise.reject(error);
        }
    )
}

export const pubAxios = publicAxios;
export const privAxios = privateAxios;