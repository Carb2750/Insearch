import { StyledCreateRequestForm } from './style';

import Input from '../Input/index';
import Textarea from '../Textarea/index';
import Select from '../Select/index';
import Button from '../Button/index';

const CreateRequestForm = () => {
    return (
        <StyledCreateRequestForm>
            <p className="title">Crear Solicitud</p>
            <div className="center">
                <Input label="Nombre" input inputSize={'78%'}/>
                <Textarea label="Descripcion" textarea rows="10" cols="60" />
                <Input label="Responsabilidades" input inputSize={'78%'}/>
                <Input label="Requisitos" input inputSize={'78%'}/>
                <Input label="Preferencias" input inputSize={'78%'}/>
                <Select label="Tipo de Trabajo" select selectSize={'78%'}/>
                <p className="duration">Duracion</p>
                <div className="inline">
                    <Input type="number"  min="1" input inputSize={'39%'} />
                    <Select select selectSize={'100%'}/>
                </div>
                <Input label="Salario" type="number" min="1" input inputSize={'78%'}/>
            </div>
            <Button>Agregar</Button>
        </StyledCreateRequestForm>
    );
};

export default CreateRequestForm;