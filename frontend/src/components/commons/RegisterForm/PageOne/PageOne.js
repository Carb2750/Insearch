import { StyledRegisterOne } from './style';

import Input from '../../Input/index';
import Button from '../../Button/index';
import Link from '../../Links/LinkRegister/index';

const RegisterOne = () => {
    return(
        <StyledRegisterOne>
            <p className="title">Crear Usuario</p>
            <div className="center">
            <Input label="Correo Electronico" input inputSize={'20rem'}/>
            <Input label="Contraseña" input inputSize={'20rem'}/>
            <Input label="Confirmar Contraseña" input inputSize={'20rem'}/>
            </div>
            <Link link="/registertwo">Siguiente</Link>
        </StyledRegisterOne>
    );
};

export default RegisterOne;