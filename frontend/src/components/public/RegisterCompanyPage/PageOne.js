import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Swal from 'sweetalert2';

import { StyledDivImage, StyledDiv } from './style'

import RegisterOne from '../../../components/commons/RegisterForm/RegisterCompany/RegisterOne';

import { pubAxios } from '../../../utils/axios';

const Register = () => {

    const [form, setForm] = useState({
        name:'',    
        email:'',
        password:'',
        location:'',
        description:'',
        website:'',   
        photo:'' 
    });

    const routeHistory = useHistory();
    const location = useLocation();
    
    let { from } = location.state || { from:{ pathname:"/login" } };

    const formHandler = (e) => {
        const { name, value } = e.target;
        if(name !== 'photo') {
            setForm({
                ...form,
                [name]:value
            });
        }
        else {
            console.log(e.target.files[0]);
            setForm({
                ...form,
                [name]:e.target.files[0]
            })
        }
    }

    const onSignCompany = () => {
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("password", form.password);
        formData.append("location", form.location);
        formData.append("description", form.description);
        formData.append("website", form.website);
        formData.append("photo", form.photo, form.photo.name);

        pubAxios.post('http://localhost:3000/api/security/signup/', formData, {headers: {'Content-Type': 'multipart/form-data'}})
        .then(data => {
            Swal.fire({
                icon:'success',
                title:'Usuario Creado',
                timer:1000
            });
            routeHistory.replace(from);
        })
        .catch(e => {
            Swal.fire({
                icon:'error',
                title:'Usuario No Creado',
                timer:1000
              });
        });
    }

    return(
    <StyledDiv>
        <StyledDivImage />
        <RegisterOne 
            names={{
            name:"name",
            email:"email",
            pass:"password",
            location:"location",
            description:"description",
            website:"website",
            photo:"photo"
        }}
            values={{
            name:form.name,
            email:form.email,
            pass:form.password,
            location:form.location,
            description:form.description,
            website:form.website,
            photo:form.photo
        }} 
        onChange={formHandler} 
        buttonHandler={onSignCompany}/>
    </StyledDiv>
    );
};


export default Register;