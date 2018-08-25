// Import React and React-router-dom:
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Application Components:
import Search from './Search';
import NotFound from './NotFound';

// Main App react class.
class App extends Component {

  // Render the base application.
  render() {
    return (
      <Router >
        
        <Switch>
          <Route path='/' exact render={ match => <Search query={match.location} />} />
          <Route path='/:id' exact render={ match => <Search query={match.match.params.id} />} />
          <Route component={NotFound} />
        </Switch>
        
      </Router >
    );
  }
}

export default App;
