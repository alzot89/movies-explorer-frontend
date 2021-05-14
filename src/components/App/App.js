import './app.css';
import Main from '../Main/Main';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Route, Switch } from 'react-router-dom';
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/sign-up">
          {/* <Register /> */}
        </Route >
        <Route path="/sign-in">
          {/* <Login /> */}
        </Route >
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
