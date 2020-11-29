import { StyledRegisterForm } from './style';

import Input from '../Input/index';
import Button from '../Button/index';

const RegisterForm = (props) => {
    return (
        <StyledRegisterForm>
            <p className="title">¡Unetenos!</p>
            <Input label="Correo Electrónico:" input inputSize={'100%'} />
            <Input label="Usuario:" input inputSize={'48%'} />
            <div className="inline">
                <Input label="Nombre:" input inputSize={'100%'} />
                <Input label="Apellido:" input inputSize={'100%'} />
            </div>
            <div>
                <Input label="Fecha de Nacimiento:" />
                <div className="inline">
                    <Input input inputSize={'10rem'} />
                    <Input input inputSize={'10rem'} />
                    <Input input inputSize={'100%'} />
                </div>
            </div>
            <Button>Registrar</Button>
        </StyledRegisterForm>
    );
}

export default RegisterForm;