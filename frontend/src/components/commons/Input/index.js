
import { StyledP, StyledInput, StyledDiv } from './style';

const input = (props) => (
    <StyledDiv>
        {(props.label) ? <StyledP>{props.label}</StyledP> : null}
        {(props.input) ? <StyledInput size={props.inputSize} type={props.type} accept={props.accept} id={props.id} onChange={props.onChange} name={props.name} min={props.min}/> : null}
    </StyledDiv>
);

export default input;