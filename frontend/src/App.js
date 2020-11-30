import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/commons/Header/index';
import LandingPage from './components/public/Langinpage/LandingPage';
import JobPage from './components/public/JobPage/JobPage';
import Login from './components/public/LoginPage/Login';
import Register from './components/public/RegisterUser/RegisterOne/RegisterOne';
import RegisterTwo from './components/public/RegisterUser/RegisterTwo/RegisterTwo';
import RegisterThree from './components/public/RegisterUser/RegisterThree/RegisterThree';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/practicas" exact component={JobPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register}/>
        <Route path="/registertwo" exact component={RegisterTwo}/>
        <Route path="/registerthree" exact component={RegisterThree}/>
      </Switch>
    </div>
  );
}

export default App;
