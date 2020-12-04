import { StyledRegisterOne } from './style';
import React, { useEffect, useState } from "react";

import Input from '../../../Input/index';
import Button from '../../../Button/index';
import Select from '../../../Select/index';

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
            <p className="title">Crear Usuario</p>
            <div>
                <Input label="Correo Electronico:" input inputSize={'100%'}/>
                <Input label="Contraseña:" type="password" input inputSize={'100%'}/>
                <Input label="Confirmar Contraseña:" type="password" input inputSize={'100%'}/>
                <Input label="Usuario:" input inputSize={'100%'} />
                <Input label="Nombre:" input inputSize={'100%'} />
                <Input label="Apellido:" input inputSize={'100%'} />
                <Select label="Fecha Nacimiento"></Select>
                <div className="inline">
                    <Select select selectSize={'90%'} />
                    <Select select selectSize={'90%'} />
                    <Select select selectSize={'100%'} />
                </div>
                <div className="center">
                    <p className="titles">Agregar Foto</p>
                    <Input type="file" id="upload" onChange={onSelectFile} accept="image/png, .jpeg, .jpg, image/gif" input />
                    <label for="upload" class="square">Seleccionar Imagen</label>
                    {selectedFile &&  <img className="img" src={preview} />}
                    <p className="titles">Agregar CV</p>
                    <Input type="file" id="upload" accept="application/pdf" input />
                    <label for="upload" class="square">Seleccionar Archivo PDF</label>
                </div>
                
            </div>
            <Button link="/pageCompanyTwo">Siguiente</Button>
        </StyledRegisterOne>
    );
};

export default RegisterOne;