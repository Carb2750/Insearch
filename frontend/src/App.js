import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/commons/Header/index';
import LandingPage from './components/public/Langinpage/LandingPage';
import JobPage from './components/public/JobPage/JobPage';
import Login from './components/public/LoginPage/Login';
import RegisterUser from './components/public/RegisterUserPage/PageOne/PageOne';
import RegisterUserTwo from './components/public/RegisterUserPage/PageTwo/PageTwo';
import RegisterUserThree from './components/public/RegisterUserPage/PageThree/PageThree';
import RegisterUserFour from './components/public/RegisterUserPage/PageFour/PageFour';
import RegisterCompany from './components/public/RegisterCompanyPage/PageOne/PageOne';
import RegisterCompanyTwo from './components/public/RegisterCompanyPage/PageTwo/PageTwo';
import RegisterCompanyThree from './components/public/RegisterCompanyPage/PageThree/PageThree';
import JobPostedPage from './components/private/JobsPostedPage/JobPostedPage';
import CreateRequest from './components/private/CreateRequest/CreateRequest';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/practicas" exact component={JobPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/pageUserOne" exact component={RegisterUser}/>
        <Route path="/pageUserTwo" exact component={RegisterUserTwo}/>
        <Route path="/pageUserThree" exact component={RegisterUserThree}/>
        <Route path="/pageUserFour" exact component={RegisterUserFour}/>
        <Route path="/pageCompanyOne" exact component={RegisterCompany}/>
        <Route path="/pageCompanyTwo" exact component={RegisterCompanyTwo}/>
        <Route path="/pageCompanyThree" exact component={RegisterCompanyThree}/>
        <Route path="/postedjobs" exact component={JobPostedPage}/>
        <Route path="/createrequest" exact component={CreateRequest}/>
      </Switch>
    </div>
  );
}

export default App;
