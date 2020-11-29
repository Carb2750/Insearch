import { StyledLinks } from './style';

import Link from './Link/index';

const links = () => (
    <StyledLinks>
        <Link link="/">Home</Link>
        <Link link="/practicas">Prácticas</Link>
        <Link link="/login">Login</Link>
    </StyledLinks>
)

export default links;