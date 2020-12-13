import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import withLayout from './components/hoc/Layout/index';
import PrivateRoute from './components/hoc/PrivateRoute/index';
import LandingPage from './components/public/Langinpage/LandingPage';
import JobsPage from './components/public/JobsPage/JobsPage';
import Login from './components/public/LoginPage/Login';
import RegisterUser from './components/public/RegisterUserPage/PageOne/PageOne';
import RegisterUserTwo from './components/public/RegisterUserPage/PageTwo/PageTwo';
import RegisterUserThree from './components/public/RegisterUserPage/PageThree/PageThree';
import RegisterUserFour from './components/public/RegisterUserPage/PageFour/PageFour';
import RegisterCompany from './components/public/RegisterCompanyPage/PageOne/PageOne';
import RegisterCompanyTwo from './components/public/RegisterCompanyPage/PageTwo/PageTwo';
import RegisterCompanyThree from './components/public/RegisterCompanyPage/PageThree/PageThree';
import JobPostedPage from './components/private/JobsPostedPage/JobPostedPage';
import JobPage from './components/public/JobsPage/JobPage/JobPage';
import CreateRequest from './components/private/CreateRequest/CreateRequest';
import FavoritesPage from './components/private/FavoritesPage/FavoritesPage';
import Logout from './components/private/LogoutPage/LogoutPage';

import { StateProvider } from './utils/context';
import mainReducer from './utils/store/store.js';

const App = () => {
  let appState = mainReducer();
  return (
    <div>
      <StateProvider initialState={appState} reducer={mainReducer}>
        <Switch>
          <Route path="/" exact component={withLayout(LandingPage)} />
          <Route path="/jobs" exact component={withLayout(JobsPage)} />
          <Route path="/jobs/:id" exact component={withLayout(JobPage)}/>
          <Route path="/login" exact component={withLayout(Login)} />
          <Route path="/practicas" exact component={withLayout(JobPage)} />
          <Route path="/pageUserOne" exact component={withLayout(RegisterUser)}/>
          <Route path="/pageUserTwo" exact component={withLayout(RegisterUserTwo)}/>
          <Route path="/pageUserThree" exact component={withLayout(RegisterUserThree)}/>
          <Route path="/pageUserFour" exact component={withLayout(RegisterUserFour)}/>
          <Route path="/pageCompanyOne" exact component={withLayout(RegisterCompany)}/>
          <Route path="/pageCompanyTwo" exact component={withLayout(RegisterCompanyTwo)}/>
          <Route path="/pageCompanyThree" exact component={withLayout(RegisterCompanyThree)}/>
          <PrivateRoute path="/postedjobs" exact component={withLayout(JobPostedPage)}/>
          <PrivateRoute path="/createrequest" exact component={withLayout(CreateRequest)}/>
          <PrivateRoute path="/favorites" exact component={withLayout(FavoritesPage)}/>
          <Route path="/logout" exact component={withLayout(Logout)}/>
        </Switch>
      </StateProvider>
    </div>
  );
}

export default App;
