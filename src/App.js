import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';

import './assets/css/reset.css'
import './assets/css/font.css'
import './assets/css/global.css'

const MainPage = lazy(() => import('./pages/MainPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" render={routeProps => <MainPage {...routeProps} />}/>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/project/:num" >
            <ProjectPage />
          </Route>
        </Switch>        
      </Suspense>
    </Router>
  );
}

export default App;
