import { StyledLoginForm } from './style';

import Input from '../Input/index';
import Button from '../Button/index';
import Link from '../Links/LinkRegister/index'

const LoginForm = () => {
    return (
        <StyledLoginForm>
            <p className="title">Inicio de Sesión</p>
            <div className="center">
                <Input label ="Usuario:" input inputSize={'25rem'}/>
                <Input label ="Contraseña:" type="password" input inputSize={'25rem'}/>
                <p className="link">¿No tienes cuenta? <Link link="/pageUserOne">Registrate</Link></p>
            </div>
            <Button>Ingresar</Button>
        </StyledLoginForm>
    );
};

export default LoginForm;