import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Leaderboards from './pages/Leaderboards';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/leaderboards" component={Leaderboards} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;