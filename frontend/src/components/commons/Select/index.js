
import { StyledSelect, StyledDiv, StyledP } from './style';

const select = (props) => (
    <StyledDiv>
        {(props.label) ? <StyledP>{props.label}</StyledP> : null}
        {(props.select) ? <StyledSelect size={props.selectSize} /> : null}
    </StyledDiv>
);

export default select;