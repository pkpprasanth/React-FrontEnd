import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import AddEmployee from "./views/AddEmployee/AddEmployee";
import EditPage from "./views/EditPage/EditPage";



function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/add/new" component={AddEmployee} />
          <Route exact path="/edit/:id" component={EditPage} />

        </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
