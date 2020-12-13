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
                <Input label="Nombre" name="" input inputSize={'78%'}/>
                <Textarea label="Descripcion" name="" textarea rows="10" cols="60" />
                <Input label="Responsabilidades" name="" input inputSize={'78%'}/>
                <Input label="Requisitos" name="" input inputSize={'78%'}/>
                <Input label="Preferencias" name="" input inputSize={'78%'}/>
                <Select label="Puesto"  name="" select selectSize={'78%'}>
                    <option value="1">Analista</option>
                    <option value="2">Desarrollador Backend</option>
                    <option value="3">Desarrollador Frontend</option>
                </Select>
                <p className="duration">Duracion</p>
                <div className="inline">
                    <Input type="number" name=""  min="1" input inputSize={'39%'} />
                    <Select select selectSize={'100%'}/>
                </div>
                <Input label="Salario" name="" type="number" min="1" input inputSize={'78%'}/>
            </div>
            <Button onClick={props.buttonHandler}>Agregar</Button>
        </StyledCreateRequestForm>
    );
};

export default CreateRequestForm;