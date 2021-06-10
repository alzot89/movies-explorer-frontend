import './app.css';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import SideMenu from '../SideMenu/SideMenu';
import NotFound from '../NotFound/NotFound';
import moviesApi from '../../utils/MoviesApi';
import * as auth from '../../utils/auth'
import { filterByKeyWord, filterByDuration } from '../../utils/FilterMovies';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

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
        err.then((preview) => { setErrorMessage(preview.message) })
      });
  }

  function handleLogout() {
    auth.signout();
    setLoggedIn(false);
  }

  useEffect(() => {
    auth.checkToken()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
        }
      })
      .then(() => { history.push('/movies') })
      .catch((err) => { console.log(err) })
  }, [history])

  async function handleRequest() {
    setIsLoading(true);
    try {
      const res = await moviesApi.getMovies();
      setIsLoading(false);
      return res
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  function handleSearchFormSubmit(e) {
    const form = e.target;
    e.preventDefault();
    handleRequest()
      .then((res) => {
        const filteredMovies = filterByKeyWord(res, searchQuery)
        if (searchQuery !== '') {
          setMovies(filteredMovies)
          setFilteredMovies(filteredMovies)
        }
      })
    form.reset();
  }

  function handleCheckbox(e) {
    setToggle(!toggle);
    const checked = e.target.checked
    if (!checked) {
      setMovies(filteredMovies)
    } else {
      const shortMovies = filterByDuration(filteredMovies);
      setMovies(shortMovies)
    }
  }

  function handleInputChange(e) {
    setSearchQuery(e.target.value)
  }

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
          <Profile isActive={isActive} onOpenBurger={hadleOpenBurger} handleLogout={handleLogout} />
          <SideMenu isActive={isActive} />
        </Route>
        <Route path="/movies">
          <Movies isActive={isActive} onOpenBurger={hadleOpenBurger} movies={movies} isLoading={isLoading} handleChange={handleInputChange} handleSubmit={handleSearchFormSubmit} toggle={toggle} handleCheckbox={handleCheckbox} />
          <SideMenu isActive={isActive} />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies isActive={isActive} onOpenBurger={hadleOpenBurger} movies={movies} isLoading={isLoading} />
          <SideMenu isActive={isActive} />
        </Route>
        <Route path="/signup">
          <Register onRegister={handleRegister} errorMessage={errorMessage} />
        </Route >
        <Route path="/signin">
          <Login onLogin={handleLogin} errorMessage={errorMessage} />
        </Route >
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
