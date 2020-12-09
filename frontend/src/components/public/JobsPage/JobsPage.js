import { useState, useEffect } from "react";
import axios from 'axios';

import { StyledDiv, StyledCards } from './style';

import Card from '../../commons/Card/index';
import Sidebar from '../../commons/SideBar';

import { useStateContext } from '../../../utils/context';
import { JOBS_LOADED, JOBS_ERROR, JOB_REMOVE_FAV, JOB_ADD_FAV } from '../../../utils/store/reducers/jobs.reducer';

import { privAxios } from '../../../utils/axios';

const JobsPage = (props) => {
    const [{jobs}, dispatch] = useStateContext();
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({
      "puesto":"",
      "experiencia":""
    });
    const [query, setQuery] = useState("");

    useEffect(() => {
      getPosts(page);
    }, []);

    const getPosts = (page, query="") => {
      axios.get("http://localhost:3000/api/works/all?page=" + page + "&" + query)
      .then(response => dispatch({type:JOBS_LOADED, payload:response.data}))
      .catch(e => dispatch({type:JOBS_ERROR}));
    }
    
    const changePageHandler = direction => {
      let nextPage = page;
      if(direction === 'next') {
        nextPage++;
        setPage(nextPage);
      }
      else {
        nextPage--;
        setPage(nextPage);
      }
      getPosts(nextPage, query);
    }

    const puestoInputHandler = (e) => {
      let newFilters = {
        ...filters,
        puesto:e.target.value
      }
      setFilters(newFilters);
    }

    const experienceHandler = (type) => {
      let newFilters = {
        ...filters,
        experiencia:type
      }
      setFilters(newFilters);
    }

    const searchHandler = (filters) => {
      if(!filters.puesto && !filters.experiencia) {
        getPosts(1);
      }
      else {
        const query = {};
        if(filters.puesto !== "") {
          query.puesto =query.puesto = filters.puesto;
        }

        if(filters.experiencia !== "") {
          query.experiencia = query.experiencia = filters.experiencia;
        }

        let urlEncodedQuery = "";
        for(let key in query) {
          if(urlEncodedQuery != "") {
            urlEncodedQuery += "&";
          }
          urlEncodedQuery += key + "=" + encodeURIComponent(query[key]);
        }

        setQuery(urlEncodedQuery);
        getPosts(page, urlEncodedQuery);
      }
    }

    const addFavorite = (idWork) => {
      if(props.user !== {}) {
        let newJobs = jobs.jobs.slice();
        const job = newJobs.filter(job => job._id === idWork)[0];
        if(!job.favs.find(fav => fav === props.user._id)) {
          const workIndex = newJobs.findIndex(job => job._id === idWork);
          privAxios.post('http://localhost:3000/api/works/addfav/',
          {
            'id_user': props.user._id,
            'rol':props.user.roles[0],
            'id_work': idWork
          }).then(() => dispatch({type:JOB_ADD_FAV, payload:{workIndex:workIndex, id:props.user._id}}))
          .catch(e => console.log(e));
        }
      }
    }

    const removeFavorite = (idWork) => {
      let newJobs = jobs.jobs.slice();
      const job = newJobs.filter(job => job._id === idWork)[0];
      if(job.favs.find(fav => fav === props.user._id)) {
        const favIndex = job.favs.indexOf(props.user._id);
        const workIndex = newJobs.findIndex(job => job._id === idWork);
        dispatch({type:JOB_REMOVE_FAV, payload:{favIndex:favIndex, workIndex:workIndex}});
      }
    }

    return (
      <StyledDiv>
          <Sidebar searchHandler={() => searchHandler(filters)} onChangeHandler={(e) => puestoInputHandler(e)} experienceHandler={experienceHandler} experience={filters.experiencia} />
          <StyledCards>
              {jobs.jobs.map(data => {
                if(props.user) {
                  if(data.favs.find(jobId => jobId === props.user._id)){
                    return(<Card link={'/jobs/' + data._id} favorite key={data["_id"]} addFav={() => removeFavorite(data._id)} enterpriseName={data["empresa"]["enterprise_name"]} jobTitle={data["titulo"]} img={"http://localhost:3000/" + data["empresa"]["photo"]} date={data["fecha_publicacion"]} job={data["puesto"]} time={data["duracion"]["tiempo"] + " " + data["duracion"]["periodo"]} pay="3000$" favIcon>
                      {data["descripcion"]}
                    </Card>)
                  }
                }
                return(
                  <Card link={'/jobs/' + data._id} key={data["_id"]} addFav={() => addFavorite(data._id)} enterpriseName={data["empresa"]["enterprise_name"]} jobTitle={data["titulo"]} img={"http://localhost:3000/" + data["empresa"]["photo"]} date={data["fecha_publicacion"]} job={data["puesto"]} time={data["duracion"]["tiempo"] + " " + data["duracion"]["periodo"]} pay="3000$" favIcon>
                      {data["descripcion"]}
                  </Card> 
                )
              })}
              <div>
                <p>Page: {page}</p>
                <button onClick={() => changePageHandler('previous')}>Anterior</button>
                <button onClick={() => changePageHandler('next')}>Siguiente</button>
              </div>
          </StyledCards>
      </StyledDiv>
    );
}

export default JobsPage;