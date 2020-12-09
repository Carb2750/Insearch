import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { StyledDivImage, StyledDiv } from './style';


import LoginForm from '../../commons/LoginForm/LoginForm';

import {pubAxios as axios, setJWT} from '../../../utils/axios';
import { useStateContext } from '../../../utils/context';
import { LOGIN_FETCHING, LOGIN_FETCHING_FAILED, LOGIN_SUCCESS } from '../../../utils/store/reducers/auth.reducer';


const Login = () => {

    const [form, setForm] = useState({
        email:'',
        password:''
    });

    
    const [, dispatch] = useStateContext();
    const routeHistory = useHistory();
    const location = useLocation();
    
    let { from } = location.state || { from:{ pathname:"/" } };

    const formHandler = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]:value
        });
    }

    const onLogin = (e) => {
        const { email, password } = form;

        dispatch({ type:LOGIN_FETCHING });
        axios.post('http://localhost:3000/api/security/login', { email, password })
        .then(({data}) => {
            dispatch({ type:LOGIN_SUCCESS, payload:data });
            setJWT(data.jwt);
            routeHistory.replace(from);
        }).catch((e) => {
            dispatch({ type:LOGIN_FETCHING_FAILED });
            console.log(e);
        })
    }

    return (
        <StyledDiv>
            <StyledDivImage />
            <LoginForm names={{email:"email", pass:"password"}} values={{email:form.email, pass:form.password}} onChange={formHandler} buttonHandler={onLogin} />
        </StyledDiv>
    );
}



export default Login;