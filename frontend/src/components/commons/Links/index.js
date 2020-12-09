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

    if(props.isAuth && props.rol === "user") {
        nav = (
        <StyledLinks>
            <Link link="/">Home</Link>
            <Link link="/jobs">Prácticas</Link>
            <Link link="/favorites">Favoritos</Link>
            <Link link="/logout">Logout</Link>
        </StyledLinks>
        )
    }
    if(props.isAuth && props.rol === "enterprise") {
        nav = (
            <StyledLinks>
                <Link link="/">Home</Link>
                <Link link="/createrequest">Publicar Trabajo</Link>
                <Link link="/postedjobs">Trabajos Posteados</Link>
                <Link link="/logout">Logout</Link>
            </StyledLinks>
        )
    }

    console.log("PROPS: " + props.rol);

    return (
        {...nav}
    );
};

export default links;