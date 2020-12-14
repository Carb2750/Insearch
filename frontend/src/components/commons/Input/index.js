
import { StyledP, StyledInput } from './style';

const input = (props) => (
    <div>
        {(props.label) ? <StyledP>{props.label}</StyledP> : null}
        {(props.input) ? <StyledInput value={props.value} name={props.name} value={props.value} onChange={props.onChange} size={props.inputSize} type={props.type} accept={props.accept} min={props.min}/> : null}
    </div>
);

export default input;