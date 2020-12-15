import { StyledDivImage, StyledOverlayColor, StyledDiv, StyledContainer } from './style';

import Cardlanding from '../../commons/CardLanding/CardLanding';
import LandingPageStart from '../../commons/LandingPage/LandingPageStart';

const landingPage = () => (
    <StyledDiv>
        <StyledOverlayColor />
        <StyledDivImage />
        <LandingPageStart />
        <Cardlanding/>
        
    </StyledDiv>
    
    
);

export default landingPage;