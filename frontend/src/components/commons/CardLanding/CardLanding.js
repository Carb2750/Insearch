
import {IoDesktopSharp, AiOutlineArrowRight } from 'react-icons/io5';
import { StyledCardLanding} from './style';

const Cardlanding = (props) => (
    <StyledCardLanding>
        <p className="title">Trabajos Populares</p>
        <div className="cards">
            <div class="container" >
                <div class="box" >
                    <span>
                        <span className="Cardicon">
                            {(props.img) ? <img src={props.img} /> : <span><IoDesktopSharp /></span> }
                        </span>
                        
                    </span>
                    
                    <h3 text align="center">Programas</h3>
                </div>
            </div>
            <div class="container" >
                
                <div class="box" >
                    <span>   
                        <span className="Cardicon">
                            {(props.img) ? <img src={props.img} /> : <span><IoDesktopSharp /></span> }
                        </span>
                        
                    </span>
                    
                    <h3 text align="center">Diseños</h3>
                </div>
            </div>      
            <div class="container" >
                <div class="box" >
                    <span>
                        <span className="Cardicon">
                            {(props.img) ? <img src={props.img} /> : <span><IoDesktopSharp /></span> }
                        </span>
                        
                    </span>
                    
                    <h3 text align="center">Fotografias</h3>
                </div>
            </div>          
         </div>
    </StyledCardLanding>
);

export default Cardlanding;

