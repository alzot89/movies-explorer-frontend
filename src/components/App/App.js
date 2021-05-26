import './app.css';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import SideMenu from '../SideMenu/SideMenu';
import api from '../../utils/api';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [isActive, setIsActive] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.getMovies()
      .then((data) => {
        setMovies(data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, []);

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
          <SideMenu isActive={isActive} />
        </Route>
        <Route path="/movies">
          <Movies isActive={isActive} onOpenBurger={hadleOpenBurger} movies={movies} isLoading={isLoading} />
          <SideMenu isActive={isActive} />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies isActive={isActive} onOpenBurger={hadleOpenBurger} movies={movies} isLoading={isLoading} />
          <SideMenu isActive={isActive} />
        </Route>
        <Route path="/signup">
          <Register />
        </Route >
        <Route path="/signin">
          <Login />
        </Route >
      </Switch>
    </div>
  );
}

export default App;
