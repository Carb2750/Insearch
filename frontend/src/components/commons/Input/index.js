import { Fragment } from 'react';

import { StyledP, StyledInput, StyledDiv } from './style';

const input = (props) => (
    <StyledDiv>
        {(props.label) ? <StyledP>{props.label}</StyledP> : null}
        {(props.input) ? <StyledInput size={props.inputSize} /> : null}
    </StyledDiv>
);

export default input;