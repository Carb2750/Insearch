import { useState } from "react";
import { StyledDiv } from "./style";

import CreateRequestForm from "../../commons/CreateRequestForm/CreateRequestForm";

import { privAxios } from "../../../utils/axios";

const CreateRequest = (props) => {
  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
    responsabilidades: [],
    requisitos: [],
    preferencias: [],
    puesto: "",
    experiencia: "",
    duracion: {
      tiempo: "",
      periodo: "",
    },
    salario: "",
    favs: []
  });

  const formHandler = (e) => {
    const { name, value } = e.target;

    const newForm = {...form};

    if (name === "tiempo" || name === "periodo") {
      newForm.duracion = {
        ...newForm.duracion,
        tiempo: (name === "tiempo" ? value : newForm.duracion.tiempo),
        periodo: (name === "periodo" ? value : newForm.duracion.tiempo)
      };
    }
    else {
        newForm[name] = value;
    }
    setForm(newForm);
  };

  const addJobHandler = () => {
    console.log(form);
    privAxios.post('http://localhost:3000/api/works/new/',
    {
        ...form,
      'id_empresa':props.user._id,
      'rol':props.user.roles[0]
    }).then(data => console.log(data))
      .catch(e => console.log(e));
  }

  return (
    <StyledDiv>
      <CreateRequestForm
        names={{
          title: "titulo",
          description: "descripcion",
          responsability: "responsabilidades",
          requirements: "requisitos",
          preferences: "preferencias",
          position: "puesto",
          experience: "experiencia",
          tiempo: "tiempo",
          periodo: "periodo",
          salary: "salario",
        }}
        values={{
          title: form.titulo,
          description: form.descripcion,
          responsability: form.responsabilidades,
          requirements: form.requisitos,
          preferences: form.preferencias,
          position: form.puesto,
          experience: form.experiencia,
          tiempo: form.duracion.tiempo,
          periodo: form.duracion.periodo,
          salary: form.salario,
        }}
        onChange={formHandler}
        sendHandler={addJobHandler}
      />
    </StyledDiv>
  );
};

export default CreateRequest;
