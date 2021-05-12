import './app.css';
import Main from '../Main/Main';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/sign-up">
          {/* <Register /> */}
        </Route >
        <Route path="/sign-in">
          {/* <Login /> */}
        </Route >
        <ProtectedRoute
          path="/"
          // loggedIn={loggedIn}
          component={Main}
        // onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
        // onCardClick={handleCardClick} isLoading={isLoading} cards={cards} onCardLike={handleCardLike} onCardDelete={handleConfirmDeletion}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
