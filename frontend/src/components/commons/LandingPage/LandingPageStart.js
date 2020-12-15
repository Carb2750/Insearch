import { useState } from "react";
import { useHistory, useLocation } from 'react-router-dom';

import { pubAxios } from "../../../utils/axios";

import { StyledLandingPage } from './style';


import Input from '../InputLanding/index';
import Button from '../Button/index';

const LadingPageStart = (props) => {
    const [findText,setFindText]= useState("");

    const routeHistory = useHistory();
    const location = useLocation();
    
    const SearchHandler = (e) => {
        const newValue = e.target.value;
        setFindText(newValue);
    }

    const SearchButton =() => {
        routeHistory.push({pathname:'/jobs',search:'?puesto='+findText})
    } 

    return (
        <StyledLandingPage>
            <Input placeholder="Buscar Trabajo" input inputSize={'100%'} onChange={(e)=> SearchHandler(e)} />
            <Button onClick={SearchButton}>Buscar</Button>
        </StyledLandingPage>
    );
}

export default LadingPageStart;