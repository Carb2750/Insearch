import { StyledLinks } from './style';

import Link from './Link/index';

const links = (props) => {

    let nav = (
        <StyledLinks>
            <Link link="/">Home</Link>
            <Link link="/jobs">Prácticas</Link>
            <Link link="/login">Login</Link>
        </StyledLinks>
    );

    if(props.isAuth) {
        nav = (
        <StyledLinks>
            <Link link="/">Home</Link>
            <Link link="/jobs">Prácticas</Link>
            <Link link="/profile">Perfil</Link>
            <Link link="/favorites">Favoritos</Link>
            <Link link="/logout">Logout</Link>
        </StyledLinks>
        )
    }

    console.log(props.isAuth);

    return (
        {...nav}
    );
};

export default links;