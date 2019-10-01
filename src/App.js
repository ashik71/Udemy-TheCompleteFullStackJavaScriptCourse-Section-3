import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PageWrapper from './components/Hoc/pagewrapper';

import Home from './components/Hoc/Home';
import About from './components/Pages/about';


class App extends Component {
  render() {
    return (
      <Router>
      <PageWrapper>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />        
      </PageWrapper>
     </Router >
    );
  }
}
export default App;
