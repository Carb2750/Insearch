import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from './components/public/NotFound/NotFound';
import withLayout from './components/hoc/Layout/index';
import PrivateRoute from './components/hoc/PrivateRoute/index';
import LandingPage from './components/public/Landingpage/LandingPage';
import JobsPage from './components/public/JobsPage/JobsPage';
import Login from './components/public/LoginPage/Login';
import RegisterUser from './components/public/RegisterUserPage/PageOne';
import RegisterCompany from './components/public/RegisterCompanyPage/PageOne';
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
          <Route path="/pageCompanyOne" exact component={withLayout(RegisterCompany)}/>
          <PrivateRoute path="/postedjobs" exact component={withLayout(JobPostedPage)}/>
          <PrivateRoute path="/createrequest" exact component={withLayout(CreateRequest)}/>
          <PrivateRoute path="/favorites" exact component={withLayout(FavoritesPage)}/>
          <Route path="/logout" exact component={withLayout(Logout)}/>
          <Route path="*" exact component={withLayout(NotFoundPage)} />
        </Switch>
      </StateProvider>
    </div>
  );
}

export default App;
