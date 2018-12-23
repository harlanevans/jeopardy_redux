import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch, } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import FetchCategories from './components/FetchCategories';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';


const App = () => (
  <Fragment >
    <NavBar />
    <Container style={{fontFamily: "'Cinzel', serif"}}>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
        <Route path="/categories" component={FetchCategories} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>

)

export default App;
