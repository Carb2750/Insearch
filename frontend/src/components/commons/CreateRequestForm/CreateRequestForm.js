import { StyledCreateRequestForm } from './style';

import Input from '../Input/index';
import Textarea from '../Textarea/index';
import Select from '../Select/index';
import Button from '../Button/index';

const CreateRequestForm = (props) => {
    return (
        <StyledCreateRequestForm>
            <p className="title">Crear Solicitud</p>
            <div className="center">
                <Input name={props.names.title} value={props.values.title} onChange={props.onChange} label="Titulo" input inputSize={'78%'}/>
                <Textarea name={props.names.description} value={props.values.description} onChange={props.onChange} label="Descripcion" name="" textarea rows="10" cols="60" />
                <Input name={props.names.responsability} value={props.valuesresponsability} onChange={props.onChange} label="Responsabilidades" name="" input inputSize={'78%'}/>
                <Input name={props.names.requirements} value={props.values.requirements} onChange={props.onChange} label="Requisitos" name="" input inputSize={'78%'}/>
                <Input name={props.names.preferences} value={props.values.preferences} onChange={props.onChange} label="Preferencias" name="" input inputSize={'78%'}/>
                <Select label="Puesto"  name={props.names.position} onChange={props.onChange} select selectSize={'78%'}>
                    <option value={props.values.position}>Analista</option>
                    <option value={props.values.position}>Desarrollador Backend</option>
                    <option value={props.values.position}>Desarrollador Frontend</option>
                </Select>
                <Select label="Experiencia" name={props.names.experience} select selectSize={'100%'}>
                    <option value={props.values.experience}>Internship</option>
                    <option value={props.values.experience}>Entry Level</option>
                    <option value={props.values.experience}>Mid Level</option>
                    <option value={props.values.experience}>Senior Level</option>
                </Select>
                <p className="duration">Duracion</p>
                <div className="iprops.names.nline">
                    <Input name={props.names.duration} value={props.values.duration} onChange={props.onChange} type="number" name=""  min="1" input inputSize={'39%'} />
                    <Select select selectSize={'100%'}/>
                </div>
                <Input label="Salario" name={props.names.salary} value={props.values.salary} onChange={props.onChange} type="number" min="1" input inputSize={'78%'}/>
            </div>
            <Button onClick={props.buttonHandler}>Agregar</Button>
        </StyledCreateRequestForm>
    );
};

export default CreateRequestForm;