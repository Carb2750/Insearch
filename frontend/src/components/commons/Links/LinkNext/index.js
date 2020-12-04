import { StyledLink } from './style';

import { NavLink } from 'react-router-dom';

const link = (props) => (
    <StyledLink>
        <NavLink exact activeClassName="active" to={props.link}>
            {props.children}
        </NavLink>
    </StyledLink>
)

export default link;