import { StyledDivImage, StyledDiv } from './style'

import RegisterOne from '../../../components/commons/RegisterForm/RegisterUser/RegisterOne';
import { privAxios } from '../../../utils/axios';

const Register = () => {

    /*const SignUp = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        privAxios.post('/api/security/signupuser', form)
        .then((data)=>{
            console.log(data);
           //dispatch({ type: })
        })
    }*/

    return (
        <StyledDiv>
            <StyledDivImage />
            <RegisterOne />
        </StyledDiv>
    );
};


export default Register;