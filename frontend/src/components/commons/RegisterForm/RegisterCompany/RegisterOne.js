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


const RegisterOne = () => {

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
                <Input label="Nombre de la Empresa:" input inputSize={'100%'}/>
                <Input label="Correo Electronico:" input inputSize={'100%'}/>
                <Input label="Contraseña:" type="password" input inputSize={'100%'}/>
                <Input label="Confirmar Contraseña:" type="password" input inputSize={'100%'}/>
                <Select label="País:" select selectSize={'100%'}>
                    {ListPlaces.map(place => {
                            return <option key={place.place} value={place.place}>{place.place}</option>
                    })}
                </Select>
                <Input label="Descripción:" input inputSize={'100%'} />
                <Input label="Sitio Web:" input inputSize={'100%'}/>
            </div>
            <p className="title">Agregar Foto</p>
            <Input type="file" id="upload" onChange={onSelectFile} accept="image/png, .jpeg, .jpg, image/gif" input />
            <label for="upload" class="square">Seleccionar Imagen</label>
            {selectedFile &&  <img className="img" src={preview} />}
            <Button link="/">Siguiente</Button>
        </StyledRegisterOne>
    );
};

export default RegisterOne;