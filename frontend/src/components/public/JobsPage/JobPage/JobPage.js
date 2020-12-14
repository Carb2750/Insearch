import { useEffect, useState, Fragment } from 'react';

import { useStateContext } from '../../../../utils/context';
import { JOBS_SET_CURRENT, JOBS_ERROR } from '../../../../utils/store/reducers/jobs.reducer';

import axios from 'axios';
import { pubAxios, privAxios } from '../../../../utils/axios';

import { StyledDiv } from './style';

import { IoLaptopOutline, IoTimeOutline, IoCashOutline, IoPersonCircleOutline } from 'react-icons/io5';

const JobPage = (props) => {

    const [currentJob, setJob] = useState({});
    const [{jobs}, dispatch] = useStateContext();
    const [isLoaded, setLoaded] = useState(false);
    const id = props.match.params.id;

    useEffect(() => {
        if(jobs.jobs.length !== 0) {
            dispatch({type:JOBS_SET_CURRENT});
            const job = jobs.jobs.filter(job => job._id === id)[0];
            setJob(job);
            setLoaded(true);
        }
        else {
            axios.get('http://localhost:3000/api/works/getById/' + id)
            .then(job => {
                const fetchedJob = job.data;
                console.log(fetchedJob);
                setJob(fetchedJob);
                setLoaded(true);
            })
            .catch(e => {
                console.log(e);
                dispatch(JOBS_ERROR);
            });
        }

        if(jobs.jobId === null) {
            console.log("ERRRRRORRR");
        }
    }, []); 

    return (
        <StyledDiv>
            {
            (isLoaded) ?
            <Fragment>
                <div className="data">
                    <div className="enterpriseData">
                        {(currentJob.empresa.photo) ? <img src={"http://localhost:3000/" + currentJob.empresa.photo} /> : <span><IoPersonCircleOutline /></span>}
                        <h1>{currentJob.empresa.enterprise_name}</h1>
                    </div>
                    <div className="jobData">
                        <span>
                            <IoLaptopOutline />
                            <p>{currentJob.puesto}</p>
                        </span>
                        <span>
                            <IoTimeOutline />
                            <p>{currentJob["duracion"]["tiempo"] + " " + currentJob["duracion"]["periodo"]}</p>
                        </span>
                        <span>
                            <IoCashOutline />
                            <p>{currentJob.salario + '$'}</p>
                        </span>
                        <span>
                            <IoTimeOutline />
                            <p>{currentJob.experiencia}</p>
                        </span>
                    </div>
                </div>
                <div className="jobDetail">
                    <h2 className="titulo">{currentJob.titulo}</h2>
                    <p>{currentJob.descripcion}</p>
                    <div className="metadata">
                        <h2>Responsabilidades:</h2>
                        <ul>
                            {currentJob["responsabilidades"].map((responsabilidad, index) => (
                            <li key={currentJob["responsabilidades"] + index}>{responsabilidad}</li>
                            ))}
                        </ul>
                        <h2>Requisitos:</h2>
                        <ul>
                            {currentJob["requisitos"].map((requisito, index) => (
                            <li key={currentJob["requisitos"] + index}>{requisito}</li>
                            ))}
                        </ul>
                        <h2>Preferencias:</h2>
                        <ul>
                            {currentJob["preferencias"].map((preferencia, index) => (
                            <li key={currentJob["preferencias"] + index}>{preferencia}</li>
                            ))}
                        </ul>
                    </div>
                    <p className="contact">Contacto: {currentJob.empresa.email}</p>
                </div>
            </Fragment>
             :  
            null
            }
        </StyledDiv>
    );
};

export default JobPage;