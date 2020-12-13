import { useState, useEffect } from 'react';

import { privAxios } from '../../../utils/axios';

import { StyledDiv, StyledCards } from './style';

import Card from '../../commons/Card/index';

const JobPostedPage = (props) => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs();
    }, []);

    const getJobs = () => {
        privAxios.get('http://localhost:3000/api/works/getAllByEnterprise/',
        {
            params: {
                id: props.user._id
            }
        })
        .then(postedJobs => setJobs(postedJobs.data))
        .catch(e => console.log(e));
    }

    const deleteJob = (id) => {
        privAxios.delete('http://localhost:3000/api/works/delete',
        {
            params: {
                id: id,
                rol: props.user.roles[0]
            }
        })
        .then(_ => getJobs())
        .catch(e => console.log(e));
    }

    return (
        <StyledDiv>
            <h1>Trabajos Publicados</h1>
            <StyledCards>
                {jobs.map(postedJob => (
                    <Card key={postedJob._id} enterpriseName={postedJob.empresa.enterprise_name} job={postedJob.puesto} time="3 meses" pay={postedJob.salario + '$'} jobTitle={postedJob.titulo} img={"http://localhost:3000/" + postedJob.empresa.photo} date={postedJob.fecha_publicacion} time={postedJob.duracion.tiempo + " " + postedJob.duracion.periodo} delIcon delJob={() => deleteJob(postedJob._id)}>
                        {postedJob.descripcion}
                    </Card>
                ))}
            </StyledCards>
        </StyledDiv>    
    );
}

export default JobPostedPage;