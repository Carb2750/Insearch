import { StyledDivImage, StyledDiv } from './style'

import RegisterOne from '../../../components/commons/RegisterForm/RegisterUser/RegisterOne';
import { privAxios } from '../../../utils/axios';

const Register = () => {
    
    return (
        <StyledDiv>
            <StyledDivImage />
            <RegisterOne />
        </StyledDiv>
    );
};


export default Register;