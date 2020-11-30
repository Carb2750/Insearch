import { StyledRegisterTwo } from './style';

import Input from '../../Input/index';
import Button from '../../Button/index';
import Link from '../../Links/LinkRegister/index';

const RegisterTwo = () => {
    return(
        <StyledRegisterTwo>
            <p className="title">¡Unetenos!</p>
            <div className="center">
                <Input label="Correo Electrónico:" input inputSize={'20rem'} />
                <Input label="Usuario:" input inputSize={'20rem'} />
                <Input label="Nombre:" input inputSize={'20rem'} />
                <Input label="Apellido:" input inputSize={'20rem'} />
            </div>
            
            <div>
                <Input label="Fecha de Nacimiento:" />
                <div className="inline">
                    <Input input inputSize={'10rem'} />
                    <Input input inputSize={'10rem'} />
                    <Input input inputSize={'100%'} />
                </div>
                {/* <Input type="file" accept="image/png, .jpeg, .jpg, image/gif" input />*/}
            </div>
            <Link link="/registerthree">Siguiente</Link>
        </StyledRegisterTwo>
    );
};

export default RegisterTwo;