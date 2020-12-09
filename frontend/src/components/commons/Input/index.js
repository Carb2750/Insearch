
import { StyledP, StyledInput, StyledDiv } from './style';

const input = (props) => (
    <StyledDiv>
        {(props.label) ? <StyledP>{props.label}</StyledP> : null}
<<<<<<< HEAD
        {(props.input) ? <StyledInput name={props.name} value={props.value} onChange={props.onChange} size={props.inputSize} type={props.type} accept={props.accept}/> : null}
=======
        {(props.input) ? <StyledInput size={props.inputSize} type={props.type} accept={props.accept} id={props.id} onChange={props.onChange} name={props.name}/> : null}
>>>>>>> e52f0fa3dcb08a4ed7e73aed84f5c97a3a6aa042
    </StyledDiv>
);

export default input;