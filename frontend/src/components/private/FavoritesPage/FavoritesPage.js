import { useEffect, useState } from 'react';

import { privAxios } from '../../../utils/axios';

import { StyledDiv, StyledCards } from './style';

import Card from '../../commons/Card/index';

const FavoritesPage = (props) => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        privAxios.get('http://localhost:3000/api/works/getfavs/',
        { params: {
            'id': props.user._id,
            'rol': props.user.roles[0]
        }
        })
        .then(jobsData => {
            setJobs([...jobsData.data.result]);
            console.log(jobsData);
        })
        .catch(e => console.log(e));
    }, []);

    return (
        <StyledDiv>
            <h1>Favoritos</h1>
            <StyledCards>
                {jobs.map(job => (
                    <Card link={'/jobs/' + job._id} favorite key={job["_id"]} enterpriseName={job["empresa"]["enterprise_name"]} jobTitle={job["titulo"]} img={"http://localhost:3000/" + job["empresa"]["photo"]} date={job["fecha_publicacion"]} job={job["puesto"]} time={job["duracion"]["tiempo"] + " " + job["duracion"]["periodo"]} pay="3000$" favIcon>
                        {job["descripcion"]}
                    </Card>
                ))}
            </StyledCards>
        </StyledDiv>    
    );
}

export default FavoritesPage;