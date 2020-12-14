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
        .then(job => {
            setJobs([...job.data.result]);
        })
        .catch(e => console.log(e));
      }, []);
        

    const removeFavorite = (idWork) => {
        let newJobs = jobs.slice();
        let job = newJobs.filter(job => job._id === idWork)[0];
        if(job.favs.find(fav => fav === props.user._id)) {
          const favIndex = job.favs.indexOf(props.user._id);
          const workIndex = newJobs.findIndex(job => job._id === idWork);
          job.favs.splice(favIndex, 1);
          newJobs[workIndex] = job;
          console.log(job);
          privAxios.put('http://localhost:3000/api/works/removefav/', 
          {
            'id_user':props.user._id,
            'rol':props.user.roles[0],
            'id_work':idWork
          }).then(() => setJobs(newJobs))
          .catch(e => console.log(e));
        }
      }

    return (
        <StyledDiv>
            <h1>Favoritos</h1>
            <StyledCards>
                {jobs.map(job => {
                    if(job.favs.find(jobId => jobId === props.user._id)) {
                        return (
                            <Card addFav={() => removeFavorite(job._id)} link={'/jobs/' + job._id} favorite key={job["_id"]} enterpriseName={job["empresa"]["enterprise_name"]} jobTitle={job["titulo"]} img={"http://localhost:3000/" + job["empresa"]["photo"]} date={job["fecha_publicacion"]} job={job["puesto"]} time={job["duracion"]["tiempo"] + " " + job["duracion"]["periodo"]} pay="3000$" favIcon>
                                {job["descripcion"]}
                            </Card>
                        );        
                    }
                    <Card addFav={() => removeFavorite(job._id)} link={'/jobs/' + job._id} key={job["_id"]} enterpriseName={job["empresa"]["enterprise_name"]} jobTitle={job["titulo"]} img={"http://localhost:3000/" + job["empresa"]["photo"]} date={job["fecha_publicacion"]} job={job["puesto"]} time={job["duracion"]["tiempo"] + " " + job["duracion"]["periodo"]} pay="3000$" favIcon>
                        {job["descripcion"]}
                    </Card>
                })}
            </StyledCards>
        </StyledDiv>    
    );
}

export default FavoritesPage;