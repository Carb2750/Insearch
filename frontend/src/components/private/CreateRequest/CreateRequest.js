import { useState } from 'react';
import { StyledDiv } from './style';

import CreateRequestForm from '../../commons/CreateRequestForm/CreateRequestForm';

const CreateRequest = () => {
    
    const [form, setForm] = useState({
        titulo:'',
        descripcion:'',
        responsabilidades:'',
        requisitos:'',
        preferencias:'',
        puesto:'',
        experiencia:'',
        duracion:'',
        salario:''
    });

    const formHandler = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]:value
        });
        console.log(name +': '+value);
    }
    
    return(
    <StyledDiv>
        <CreateRequestForm names={{title:"titulo",description:"descripcion",responsability:"responsabilidades",requirements:"requisitos",preferences:"preferencias",position:"puesto",experience:"experiencia",duration:"duracion",salary:"salario"}} values={{title:form.titulo,description:form.descripcion,responsability:form.responsabilidades,requirements:form.requisitos,preferences:form.preferencias,position:form.puesto,experience:form.experiencia,duration:form.duracion,salary:form.salario}} onChange={formHandler}/>
    </StyledDiv>
    );
};

export default CreateRequest;