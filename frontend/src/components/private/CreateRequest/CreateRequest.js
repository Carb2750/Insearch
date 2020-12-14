import { useState } from "react";
import { useHistory, useLocation } from 'react-router-dom';

import { StyledDiv } from "./style";

import Swal from 'sweetalert2';

import CreateRequestForm from "../../commons/CreateRequestForm/CreateRequestForm";

import { privAxios } from "../../../utils/axios";

const CreateRequest = (props) => {
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    responsabilidades: [],
    requisitos: [],
    preferencias: [],
    puesto: "Analista",
    experiencia: "Internship",
    duracion: {
      tiempo: "",
      periodo: "Meses",
    },
    salario: "",
    favs: []
  });

  const [arrData, setArrData] = useState({
    responsabilidades:'',
    requisitos:'',
    preferencias:''
  });

  const routeHistory = useHistory();
  const location = useLocation();
  
  let { from } = location.state || { from:{ pathname:"/postedjobs" } };

  const formHandler = (e) => {
    const { name, value } = e.target;
    if(name !== "responsabilidades" && name !== "requisitos"  && name !== "preferencias") {
      const newForm = {...form};
  
      if (name === "tiempo" || name === "periodo") {
        newForm.duracion = {
          ...newForm.duracion,
          tiempo: (name === "tiempo" ? value : newForm.duracion.tiempo),
          periodo: (name === "periodo" ? value : newForm.duracion.periodo)
        };
      }
      else {
          newForm[name] = value;
      }
      setForm(newForm);
    }
    else {
      const newForm = {...arrData};
      newForm[name] = value;
      setArrData(newForm);
    }
  };

  const addJobHandler = () => {
    console.log(form);
    privAxios.post('http://localhost:3000/api/works/new/',
    {
        ...form,
      'id_empresa':props.user._id,
      'rol':props.user.roles[0]
    }).then(data => {
      Swal.fire({
        icon:'success',
        title:'Trabajo Añadido',
        timer:1000
    });
    routeHistory.replace(from);
    })
    .catch(e => {
      Swal.fire({
        icon:'error',
        title:'Trabajo No Añadido',
        timer:1000
      });
    });
  }

  const add = (name) => {
    const newArr = {...form};
    const newValues = {...arrData};

    newArr[name].push(newValues[name]);
    setForm(newArr);
  }

  return (
    <StyledDiv>
      <CreateRequestForm
        names={{
          title: "titulo",
          description: "descripcion",
          responsabilidades: "responsabilidades",
          requisitos: "requisitos",
          preferencias: "preferencias",
          position: "puesto",
          experience: "experiencia",
          tiempo: "tiempo",
          periodo: "periodo",
          salary: "salario",
        }}
        values={{
          title: form.titulo,
          description: form.descripcion,
          responsabilidades: arrData.responsabilidades,
          requisitos: arrData.requisitos,
          preferencias: arrData.preferencias,
          position: form.puesto,
          experience: form.experiencia,
          tiempo: form.duracion.tiempo,
          periodo: form.duracion.periodo,
          salary: form.salario,
        }}
        onChange={formHandler}
        sendHandler={addJobHandler}
        add={add}
        responsabilidades={form.responsabilidades}
        requisitos={form.requisitos}
        preferencias={form.preferencias}
      />
    </StyledDiv>
  );
};

export default CreateRequest;
