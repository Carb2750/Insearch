import { StyledRegisterThree } from './style';
import React, { useEffect, useState } from "react";

import Input from '../../../Input/index';
import Link from '../../../Links/LinkNext/index';

const RegisterThree = () => {
    
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
        <StyledRegisterThree>
            <p className="title">Agregar Foto</p>
            <Input type="file" id="upload" onChange={onSelectFile} accept="image/png, .jpeg, .jpg, image/gif" input />
            <label for="upload" class="square">Seleccionar Imagen</label>
            {selectedFile &&  <img className="img" src={preview} />}
            <div className="enlace">
                <Link link="/">Siguiente</Link>
            </div>
        </StyledRegisterThree>
    );
};

export default RegisterThree;