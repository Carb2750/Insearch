import { StyledLoginForm } from './style';

import Input from '../Input/index';
import Button from '../Button/index';
import Link from '../Links/LinkRegister/index'

const LoginForm = (props) => {
    return (
        <StyledLoginForm>
            <p className="title">Inicio de Sesión</p>
            <div className="center">
                <Input name={props.names.email} value={props.values.email} onChange={props.onChange} label ="Usuario:" input inputSize={'25rem'}/>
                <Input name={props.names.pass} value={props.values.pass} onChange={props.onChange} label ="Contraseña:" input inputSize={'25rem'}/>
                <p className="link">¿No tienes cuenta? <Link link="/pageUserOne">Registrate</Link></p>
                <p className="link">¿O acaso tienes una empresa? <Link link="/pageCompanyOne">Unetenos</Link></p>
            </div>
            <Button onClick={props.buttonHandler}>Ingresar</Button>
        </StyledLoginForm>
    );
};

export default LoginForm;