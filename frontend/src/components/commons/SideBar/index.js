import { StyledDiv } from './style';

import Button from '../Button/index';
import Input from '../Input/index';

const Sidebar = () => {
    return (
        <StyledDiv>
            <h2>Puesto</h2>
            <Input input inputSize={50} />
            <h2>Experiencia</h2>
            <div className="buttonGroup">
                <Button theme='secondary'>Internship</Button>
                <Button theme='secondary'>Entry Level</Button>
                <Button theme='secondary'>Mid Level</Button>
                <Button theme='secondary'>Senior Level</Button>
            </div>
            <h2>Fecha Publicación</h2>
            <div className="buttonGroup">
                <Button theme='secondary'>Más recientes</Button>
                <Button theme='secondary'>Más relevantes</Button>
            </div>
            <div className="applyChanges">
                <Button>Aplicar Cambios</Button>
            </div>
        </StyledDiv>
    );
}

export default Sidebar;