
import { StyledTextarea, StyledDiv, StyledP } from './style';

const textarea = (props) => (
    <StyledDiv>
        {(props.label) ? <StyledP>{props.label}</StyledP> : null}
        {(props.textarea) ? <StyledTextarea textarea={props.textarea} rows={props.rows} cols={props.cols} name={props.name} onChange={props.onChange}/> : null}
    </StyledDiv>
);

export default textarea;