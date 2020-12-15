
import { StyledP, StyledInput, StyledDiv } from './style';

const input = (props) => (
    <StyledDiv>
        {(props.label) ? <StyledP>{props.label}</StyledP> : null}
        {(props.input) ? <StyledInput value={props.value} name={props.name} value={props.value} onChange={props.onChange} size={props.inputSize} type={props.type} accept={props.accept} placeholder={props.placeholder}/> : null}
    </StyledDiv>
);

export default input;