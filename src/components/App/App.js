import './app.css';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import * as auth from '../../utils/auth';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });
  const history = useHistory();

  useEffect(() => {
    auth.checkToken()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
        }
      })
      .then(() => { history.push("/movies") })
      .catch((err) => { console.log(err) })
  }, [history])

  useEffect(() => {
    mainApi.getUserData()
      .then((data) => {
        setCurrentUser({ name: data.name, email: data.email })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  function handleRegister(credential) {
    auth.register(credential)
      .then((res) => {
        if (res) {
          history.push('/signin')
        }
      })
      .catch((err) => {
        err.then((preview) => { setErrorMessage(preview.message) })
      })
  }

  function handleLogin(credential) {
    if (!credential.email || !credential.password) {
      return
    }
    auth.authorize(credential)
      .then(() => {
        setLoggedIn(true);
      })
      .then(() => { history.push('/movies') })
      .catch((err) => {
        err.then((res) => { setErrorMessage(res.message) })
      });
  }

  function handleLogout() {
    auth.signout();
    setLoggedIn(false);
  }

  function handleUpdateProfile(credential) {
    setErrorMessage("")
    mainApi.changeUserData(credential)
      .then((data) => {
        if (data) {
          setCurrentUser({ name: data.name, email: data.email })
        }
      })
      .catch((err) => {
        err.then((preview) => { setErrorMessage(preview.message) })
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
          </Route >
          <Route path="/signin">
            <Login onLogin={handleLogin} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
          </Route >
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            handleLogout={handleLogout} onUpdateProfile={handleUpdateProfile} errorMessage={errorMessage} setErrorMessage={setErrorMessage}
          />
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider >
  );
}

export default App;
