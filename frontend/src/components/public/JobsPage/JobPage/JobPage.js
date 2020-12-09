import { useEffect, useState } from 'react';

import { useStateContext } from '../../../../utils/context';
import { JOBS_SET_CURRENT, JOBS_ERROR } from '../../../../utils/store/reducers/jobs.reducer';

import axios from 'axios';
import { pubAxios, privAxios } from '../../../../utils/axios';

const JobPage = (props) => {

    const [currentJob, setJob] = useState({});
    const [{jobs}, dispatch] = useStateContext();
    const id = props.match.params.id;

    useEffect(() => {
        if(jobs.jobs.length !== 0) {
            dispatch({type:JOBS_SET_CURRENT});
            const job = jobs.jobs.filter(job => job._id === id)[0];
            setJob(job);
        }
        else {
            axios.get('http://localhost:3000/api/works/getById/' + id)
            .then(job => {
                const fetchedJob = job.data;
                setJob(fetchedJob);
            })
            .catch(e => {
                console.log(e);
                dispatch(JOBS_ERROR);
            });
        }

        console.log("USER: " + JSON.stringify(props.user));

        if(jobs.jobId === null) {
            console.log("ERRRRRORRR");
        }
    }, []); 

    const onApply = (jobId) => {
        privAxios.post('http://localhost:3000/api/works/apply', 
        {
            'id_user':props.user._id,
            'id_work':jobId,
            'rol':props.user.roles[0]
        });
    }

    console.log(currentJob);
    return (
        <div>
            <h1>{currentJob.titulo}</h1>
            <h2>{(currentJob.empresa) ? currentJob.empresa.enterprise_name : null}</h2>
            <p>{currentJob.descripcion}</p>
            <p>{currentJob.tipo_solicitud}</p>
            <p>{currentJob.puesto}</p>
            <button onClick={() => onApply(currentJob._id)}>Aplicar</button>
        </div>
    );
};

export default JobPage;