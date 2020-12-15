import { StyledHeader } from './style';
import { Link } from 'react-router-dom';

import Links from '../Links/index';

const header = (props) => (
    <StyledHeader>
        <Link to='/'><p>Insearch</p></Link>
        <Links isAuth={props.isAuth} rol={props.rol} />
    </StyledHeader>
)

export default header;