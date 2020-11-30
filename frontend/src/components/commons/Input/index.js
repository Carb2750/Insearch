
import { StyledP, StyledInput, StyledDiv } from './style';

const input = (props) => (
    <StyledDiv>
        {(props.label) ? <StyledP>{props.label}</StyledP> : null}
        {(props.input) ? <StyledInput size={props.inputSize} type={props.type} accept={props.accept}/> : null}
    </StyledDiv>
);

export default input;