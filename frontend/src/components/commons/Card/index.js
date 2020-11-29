import { StyledCard } from './style';

const card = (props) => (
    <StyledCard>
        <div className="heading">
            <h2>{props.enterpriseName}</h2>
            <p>12/12/2020</p>
        </div>
        <div className="body">
            <p>{props.children}</p>
            <div className="generalInfo">
                <p>{props.job}</p>
                <p>{props.time}</p>
                <p>{props.pay}</p>
            </div>
        </div>
    </StyledCard>
);

export default card;