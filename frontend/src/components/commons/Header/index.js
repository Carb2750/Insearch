import { StyledHeader } from './style';

import Links from '../Links/index';

const header = (props) => (
    <StyledHeader>
        <p>Insearch</p>
        <Links isAuth={props.isAuth} />
    </StyledHeader>
)

export default header;