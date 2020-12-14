import { StyledRegisterOne } from './style';
import React, { useEffect, useState } from "react";

import Input from '../../Input/index';
import Button from '../../Button/index';
import Select from '../../Select/index';


const ListPlaces = [
    { place : 'Belice', value : 1  },
    { place : 'Costa Rica', value : 2 },
    { place : 'El Salvador', value : 3 },
    { place : 'Guatemala', value : 4 },
    { place : 'Honduras', value : 5 },
    { place : 'México', value : 6 },
    { place : 'Nicaragua', value : 7 },
    { place : 'Panamá', value : 8 }
];


const RegisterOne = (props) => {

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }

    return(
        <StyledRegisterOne>
            <p className="title">Crear Usuario Empresa</p>
            <div className="center">
                <Input name={props.names.name} value={props.values.name} onChange={props.onChange} label="Nombre de la Empresa:" input inputSize={'100%'}/>
                <Input name={props.names.email} value={props.values.email} onChange={props.onChange} label="Correo Electronico:" input inputSize={'100%'}/>
                <Input name={props.names.pass} value={props.values.pass} onChange={props.onChange} label="Contraseña:" type="password" input inputSize={'100%'}/>
                <Input label="Confirmar Contraseña:" type="password" input inputSize={'100%'}/>
                <Select name={props.names.location} onChange={props.onChange} label="País:" select selectSize={'100%'}>
                    {ListPlaces.map(place => {
                            return <option key={place.place} value={place.place}>{place.place}</option>
                    })}
                </Select>
                <Input name={props.names.description} value={props.values.description} onChange={props.onChange} label="Descripción:" input inputSize={'100%'} />
                <Input name={props.names.website} value={props.values.website} onChange={props.onChange} label="Sitio Web:" input inputSize={'100%'}/>
            </div>
            <p className="title">Agregar Foto</p>
            <Input name={props.names.photo} type="file" id="upload" onChange={props.onChange} accept="image/png, .jpeg, .jpg, image/gif" input />
            <label className="square">Seleccionar Imagen</label>
            {/* {selectedFile &&  <img className="img" src={preview} />} */}
            <Button onClick={props.buttonHandler}>Registrar</Button>
        </StyledRegisterOne>
    );
};

export default RegisterOne;