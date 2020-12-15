import { StyledDivImage, StyledOverlayColor, StyledDiv, StyledContainer } from './style';

import RegisterForm from '../../commons/RegisterForm/RegisterForm';
import Cardlanding from '../../commons/CardLanding/CardLanding';

const landingPage = () => (
    <StyledDiv>
        <StyledOverlayColor />
        <StyledDivImage />
        <RegisterForm />
        <Cardlanding/>
    </StyledDiv>
    
    
);

export default landingPage;