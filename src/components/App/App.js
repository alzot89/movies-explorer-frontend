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
import { filterByKeyWord, filterByDuration } from '../../utils/FilterMovies';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(false);


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
          <Profile isActive={isActive} onOpenBurger={hadleOpenBurger} />
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
          <Register />
        </Route >
        <Route path="/signin">
          <Login />
        </Route >
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
