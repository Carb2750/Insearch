import { Link } from 'react-router-dom';

import { StyledCard } from './style';

import { IoLaptopOutline, IoTimeOutline, IoCashOutline, IoHeartOutline, IoPersonCircleOutline } from 'react-icons/io5';

const card = (props) => (
    <StyledCard>
            <div>
                <Link to={props.link}>
                    <div className="heading">
                        <span>
                            <span className="jobMetaData">
                                {(props.img) ? <img src={props.img} /> : <span className="userIcon"><IoPersonCircleOutline /></span> }
                                <h2>{props.enterpriseName}</h2>
                            </span>
                        </span>
                        <p className="date">{props.date}</p>
                    </div>
                    <p className="jobName">{props.jobTitle}</p>
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
                    </div>
                </Link>
                    {(props.favIcon) ? <span onClick={props.addFav} className={(props.favorite) ? "favIcon selected" : "favIcon"}><IoHeartOutline /></span> : null}
            </div>
        </StyledCard>
);

export default card;