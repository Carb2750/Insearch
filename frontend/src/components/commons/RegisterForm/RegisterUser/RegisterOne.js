import React, { useState } from "react";
import { useHistory, useLocation } from 'react-router-dom';

import Swal from 'sweetalert2';

import { StyledRegisterOne } from './style';

import { pubAxios } from '../../../../utils/axios';

import Input from '../../Input/index';
import Button from '../../Button/index';
import Select from '../../Select/index';

const RegisterOne = (props) => {

    const [form, setForm] = useState({
        usernname:'',
        email:'',
        name:'',
        lastname:'',
        password:'',
        confirmPassword:'',
        birthdate:'',
        career:''
    });

    const routeHistory = useHistory();
    const location = useLocation();
    
    let { from } = location.state || { from:{ pathname:"/login" } };

    const formInputHandler = (e) => {
        const { name, value } = e.target;

        console.log(name, value)

        const newForm = {...form};

        newForm[name] = value;

        setForm(newForm);
        
    }

    const addUser = () => {
        if(form.password === form.confirmPassword) {
            pubAxios.post('http://localhost:3000/api/security/signupuser',
            {
                ...form
            }).then(() => {
                Swal.fire({
                    icon:'success',
                    title:'Usuario Añadido',
                    timer:1000
                });
                routeHistory.replace(from);
            })
              .catch(e => {
                Swal.fire({
                    icon:'error',
                    title:'Usuario no Añadido',
                    timer:1000
                });
              });
        }
        else {
            Swal.fire({
                icon:'error',
                title:'Las Contraseñas o Coinciden',
                timer:1000
            });
        }
    }

    return(
        <StyledRegisterOne>
            <p className="title">Crear Usuario</p>
            <div>
                <Input label="Correo Electronico:" name="email" input inputSize={'100%'} onChange={formInputHandler}/>
                <Input label="Contraseña:" name="password" type="password" input inputSize={'100%'} onChange={formInputHandler}/>
                <Input label="Confirmar Contraseña:" name="confirmPassword" type="password" input inputSize={'100%'} onChange={formInputHandler}/>
                <Input label="Usuario:" name="username" input inputSize={'100%'} onChange={formInputHandler} />
                <Input label="Nombre:" name="name" input inputSize={'100%'} onChange={formInputHandler} />
                <Input label="Apellido:" name="lastname" input inputSize={'100%'} onChange={formInputHandler} />
                <Select label='Carrera:' name='career' onChange={formInputHandler} select selectSize={'100%'}>
                    <option value={'Ingeniería en Sistemas'}>Ingeniería en Sistemas</option>
                    <option value={'Diseño Gráfico'}>Diseño Gráfico</option>
                    <option value={'Administración de Empresas'}>Administración de Empresas</option>
                    <option value={'Finanzas'}>Finanzas</option>
                </Select>
                <Input label="Fecha Nacimiento" name="birthdate" input type="date" inputSize={'100%'} onChange={formInputHandler} />
            </div>
            <Button onClick={addUser}>Registrar</Button>
        </StyledRegisterOne>
    );
};

export default RegisterOne;