import { StyledDiv } from './style';

import Button from '../Button/index';
import Input from '../Input/index';

const sidebar = (props) => {

    const experienceControls = [
        {label:"Internship", type:"internship"},
        {label:"Entry Level", type:"Entry Level"},
        {label:"Mid Level", type:"Mid Level"},
        {label:"Senior Level", type:"Senior Level"}
    ]

    return (
        <StyledDiv>
            <h2>Puesto</h2>
            <Input value={props.value} name="puesto" onChange={props.onChangeHandler} input inputSize={50} />
            <h2>Experiencia</h2>
            <div className="buttonGroup">
                {experienceControls.map(experienceControl => {
                    if(experienceControl.type === props.experience) {
                        return(
                            <Button theme="secondary" active key={experienceControl.type} onClick={() => props.experienceHandler(experienceControl.type)}>
                                {experienceControl.label}
                            </Button>          
                        );
                    }
                    return(
                        <Button theme="secondary" key={experienceControl.type} onClick={() => props.experienceHandler(experienceControl.type)}>
                            {experienceControl.label}
                        </Button>
                    );
               })}
            </div>
            <h2>Fecha Publicación</h2>
            <div className="buttonGroup">
                <Button theme='secondary'>Más recientes</Button>
                <Button theme='secondary'>Más relevantes</Button>
            </div>
            <div className="applyChanges">
                <Button onClick={props.clearHandler}>Borrar Filtros</Button>
                <Button onClick={props.searchHandler}>Aplicar Cambios</Button>
            </div>
        </StyledDiv>
    );
}

export default sidebar;