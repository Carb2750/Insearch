import { StyledCard } from './style';

import { IoLaptopOutline, IoTimeOutline, IoCashOutline, IoHeartOutline } from 'react-icons/io5';

const card = (props) => (
    <StyledCard>
        <div className="heading">
            <h2>{props.enterpriseName}</h2>
            <p>12/12/2020</p>
        </div>
        <div className="body">
            <p>{props.children}</p>
            <div className="generalInfo">
                <span>
                    <IoLaptopOutline />
                    <p>{props.job}</p>
                </span>
                <span>
                    <IoTimeOutline />
                    <p>{props.time}</p>
                </span>
                <span>
                    <IoCashOutline />
                    <p>{props.pay}</p>
                </span>
            </div>
            <span className="favIcon"><IoHeartOutline /></span>
        </div>
    </StyledCard>
);

export default card;