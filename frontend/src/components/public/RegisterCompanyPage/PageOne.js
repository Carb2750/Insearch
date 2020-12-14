import { StyledDivImage, StyledDiv } from './style'
import { useState } from 'react';

import RegisterOne from '../../../components/commons/RegisterForm/RegisterCompany/RegisterOne';

import { pubAxios } from '../../../utils/axios';

const Register = () => {
    
    const formData = new FormData();
    formData.append("name","");
    formData.append("email","");
    formData.append("password","");
    formData.append("location","");
    formData.append("description","");
    formData.append("website","");
    formData.append("photo", fileInput.files[0],"");

    const [form, setForm] = useState({
        name:'',    
        email:'',
        password:'',
        location:'',
        description:'',
        website:'',    
    });

    const formHandler = (e) => {
        const { name, value } = e.target;

        setForm({
            ...formData,
            [name]:value
        });
        console.log(name +': '+value);
    }

    const onSignCompany = () => {
        console.log(formData);
        pubAxios.post('http://localhost:3000/api/security/signup/', { ...formData})
        .then(data => console.log(data))
        .catch(e => console.log(e));
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
            name:formData.name,
            email:formData.email,
            pass:formData.password,
            location:formData.location,
            description:formData.description,
            website:formData.website,
            photo:formData.photo
        }} 
        onChange={formHandler} 
        buttonHandler={onSignCompany}/>
    </StyledDiv>
    );
};


export default Register;