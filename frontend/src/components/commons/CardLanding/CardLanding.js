
import {IoDesktopSharp,IoBrushSharp,IoCameraSharp} from 'react-icons/io5';
import { AiOutlineArrowRight} from 'react-icons/ai';
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
                    
                    <h3 text align="center">Desarrollador</h3>
                    <p text align="center">involucrados en todo el proceso relacionado a la creación y diseño de nuevos sistemas.</p>
                    
                </div>
            </div>
            <div class="container" >
                
                <div class="box" >
                    <span>   
                        <span className="Cardicon">
                            {(props.img) ? <img src={props.img} /> : <span><IoBrushSharp /></span> }
                        </span>
                        
                    </span>
                    <h3 text align="center">Diseño Grafico</h3>
                    <p text align="center">comunicar un mensaje de forma visual. resuelve desafíos muy concretos a nivel de comunicación y consecución de objetivos marcados.</p>
                </div>
            </div>      
            <div class="container" >
                <div class="box" >
                    <span>
                        <span className="Cardicon">
                            {(props.img) ? <img src={props.img} /> : <span><IoCameraSharp /></span> }
                        </span>
                        
                    </span>
                    
                    <h3 text align="center">Fotografias</h3>
                    <p text align="center">captar imágenes de personas, eventos, escenas, materiales, productos, entre otros elementos.</p>
                    
                </div>
            </div>          
         </div>
    </StyledCardLanding>
);

export default Cardlanding;

