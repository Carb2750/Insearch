import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/commons/Header/index';
import LandingPage from './components/public/Langinpage/LandingPage';
import JobPage from './components/public/JobPage/JobPage';

import JobPostedPage from './components/private/JobsPostedPage/JobPostedPage';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/practicas" exact component={JobPage} />
        <Route path="/login" exact component={null} />
        <Route path="/postedjobs" exact component={JobPostedPage}/>
      </Switch>
    </div>
  );
}

export default App;
