import { StyledCreateRequestForm } from './style';

import Input from '../Input/index';
import Textarea from '../Textarea/index';
import Select from '../Select/index';
import Button from '../Button/index';

const CreateRequestForm = (props) => {
    return (
        <StyledCreateRequestForm>
            <h1>Crear Solicitud</h1>
            <div className="center">
                <Input name={props.names.title} value={props.values.title} onChange={props.onChange} label="Titulo" input inputSize={'78%'}/>
                <Textarea name={props.names.description} value={props.values.description} onChange={props.onChange} label="Descripcion" textarea rows="10" cols="60" />
                <Input name={props.names.responsabilidades} value={props.values.responsabilidades} onChange={props.onChange} label="Responsabilidades" input inputSize={'78%'}/>
                <Button onClick={() => props.add("responsabilidades")}>Agregar</Button>
                {props.responsabilidades.map(data => (
                    <ul key={data}>
                        <li>{data}</li>
                    </ul>
                ))}
                <Input name={props.names.requisitos} value={props.values.requisitos} onChange={props.onChange} label="Requisitos" input inputSize={'78%'}/>
                <Button onClick={() => props.add("requisitos")}>Agregar</Button>
                {props.requisitos.map(data => (
                    <ul key={data}>
                        <li>{data}</li>
                    </ul>
                ))}
                <Input name={props.names.preferencias} value={props.values.preferencias} onChange={props.onChange} label="Preferencias" input inputSize={'78%'}/>
                <Button onClick={() => props.add("preferencias")}>Agregar</Button>
                {props.preferencias.map(data => (
                    <ul key={data}>
                        <li>{data}</li>
                    </ul>
                ))}
                <Select label="Puesto"  name={props.names.position} onChange={props.onChange} select selectSize={'78%'}>
                    <option value={props.values.position.selectedIndex}>Analista</option>
                    <option value={props.values.position.selectedIndex}>Desarrollador Backend</option>
                    <option value={props.values.position.selectedIndex}>Desarrollador Frontend</option>
                </Select>
                <Select label="Experiencia" name={props.names.experience} onChange={props.onChange} select selectSize={'78%'}>
                    <option value={props.values.experience.selectedIndex}>Internship</option>
                    <option value={props.values.experience.selectedIndex}>Entry Level</option>
                    <option value={props.values.experience.selectedIndex}>Mid Level</option>
                    <option value={props.values.experience.selectedIndex}>Senior Level</option>
                </Select>
                <p className="duration">Duracion</p>
                <div className="inline">
                    <Input name={props.names.tiempo} value={props.values.tiempo} onChange={props.onChange} type="number"  min="1" input inputSize={'39%'} />
                    <Select select selectSize={'100%'} name={props.names.periodo} onChange={props.onChange}>
                        <option value={props.values.periodo.selectedIndex}>Meses</option>
                        <option value={props.values.periodo.selectedIndex}>Años</option>
                    </Select>
                </div>
                <Input label="Salario" name={props.names.salary} value={props.values.salary} onChange={props.onChange} type="number" min="1" input inputSize={'78%'}/>
            </div>
            <Button onClick={props.sendHandler}>Agregar</Button>
        </StyledCreateRequestForm>
    );
};

export default CreateRequestForm;