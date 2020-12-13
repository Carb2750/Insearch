
import { StyledSelect, StyledDiv, StyledP } from './style';

const select = (props) => (
    <StyledDiv>
        {(props.label) ? <StyledP>{props.label}</StyledP> : null}
        {(props.select) ? <StyledSelect size={props.selectSize} name={props.name} onChange={props.onChange}>{props.children}</StyledSelect> : null}
    </StyledDiv>
);

export default select;