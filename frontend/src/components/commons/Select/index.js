
import { StyledSelect, StyledDiv, StyledP } from './style';

const select = (props) => (
    <StyledDiv>
        {(props.label) ? <StyledP>{props.label}</StyledP> : null}
{(props.select) ? <StyledSelect size={props.selectSize}>{props.children}</StyledSelect> : null}
    </StyledDiv>
);

export default select;