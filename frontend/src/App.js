import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import withLayout from './components/hoc/Layout/index';
import LandingPage from './components/public/Langinpage/LandingPage';
import JobsPage from './components/public/JobsPage/JobsPage';
import Login from './components/public/LoginPage/Login';
import Register from './components/public/RegisterUser/RegisterOne/RegisterOne';
import RegisterTwo from './components/public/RegisterUser/RegisterTwo/RegisterTwo';
import RegisterThree from './components/public/RegisterUser/RegisterThree/RegisterThree';
import JobPostedPage from './components/private/JobsPostedPage/JobPostedPage';
import JobPage from './components/public/JobsPage/JobPage/JobPage';
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
          <Route path="/register" exact component={withLayout(Register)}/>
          <Route path="/registertwo" exact component={withLayout(RegisterTwo)}/>
          <Route path="/registerthree" exact component={withLayout(RegisterThree)}/>
          <Route path="/postedjobs" exact component={withLayout(JobPostedPage)}/>
          <Route path="/favorites" exact component={withLayout(FavoritesPage)}/>
          <Route path="/logout" exact component={withLayout(Logout)}/>
        </Switch>
      </StateProvider>
    </div>
  );
}

export default App;
