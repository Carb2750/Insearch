import { StyledRegisterTwo } from './style';

import Input from '../../../Input/index';
import Link from '../../../Links/LinkNext/index';
import Select from '../../../Select/index';

const RegisterTwo = () => {
    return(
        <StyledRegisterTwo>
            <p className="title">Crear Usuario</p>
            <div>
                <div className="center">
                <Input label="Usuario:" input inputSize={'100%'} />
                <Input label="Nombre:" input inputSize={'100%'} />
                <Input label="Apellido:" input inputSize={'100%'} />
            </div>
            <div>
                <Input label="Fecha de Nacimiento:" />
                <div className="inline">
                    <Select select selectSize={'10.5rem'} />
                    <Select select selectSize={'10.5rem'} />
                    <Select select selectSize={'10.5rem'} />
                    {/*<Input input inputSize={'10rem'} />
                    <Input input inputSize={'10rem'} />
                    <Input input inputSize={'100%'} />*/}
                </div>
            </div>
            </div>
            
            <div className="enlace">
                <Link link="/pageUserThree">Siguiente</Link>
            </div>
            
        </StyledRegisterTwo>
    );
};

export default RegisterTwo;