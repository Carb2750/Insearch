import { StyledRegisterFour } from './style';
import React, { useEffect, useState, onInputchange } from "react";

import Input from '../../../Input/index';
import Button from '../../../Button/index';

const RegisterFour = () => {
    return(
        <StyledRegisterFour>
            <p className="title">Agregar CV</p>
            <Input type="file" id="upload" accept="application/pdf" input />
            <label for="upload" class="square">Seleccionar Archivo PDF</label>
            <Button>Registrar</Button>
        </StyledRegisterFour>
    );
};

export default RegisterFour;