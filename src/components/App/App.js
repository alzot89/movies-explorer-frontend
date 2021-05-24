import './app.css';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SideMenu from '../SideMenu/SideMenu';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [isActive, setIsActive] = useState(false);

  function hadleOpenBurger() {
    setIsActive(!isActive);
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/profile">
          <Profile isActive={isActive} onOpenBurger={hadleOpenBurger} />
        </Route>
        <Route path="/signup">
          <Register />
        </Route >
        <Route path="/signin">
          <Login />
        </Route >
      </Switch>
      <SideMenu isActive={isActive} />
    </div>
  );
}

export default App;
