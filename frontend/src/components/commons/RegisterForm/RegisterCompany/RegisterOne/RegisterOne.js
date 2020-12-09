import { StyledRegisterOne } from './style';

import Input from '../../../Input/index';
import Button from '../../../Button/index';
import Select from '../../../Select/index';

const RegisterOne = () => {
    return(
        <StyledRegisterOne>
            <p className="title">Crear Usuario Empresa</p>
            <div className="center">
                <Input label="Nombre de la Empresa:" input inputSize={'100%'}/>
                <Input label="Correo Electronico:" input inputSize={'100%'}/>
                <Input label="Contraseña:" type="password" input inputSize={'100%'}/>
                <Input label="Confirmar Contraseña:" type="password" input inputSize={'100%'}/>
                <Select label="Ubicacion:" select selectSize={'100%'} />
                <Input label="Descripción:" input inputSize={'100%'} />
                <Input label="Sitio Web:" input inputSize={'100%'}/>
            </div>
            <Button link="/pageCompanyTwo">Siguiente</Button>
        </StyledRegisterOne>
    );
};

export default RegisterOne;