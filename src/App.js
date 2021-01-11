import React, { Suspense, lazy } from 'react';
import {
  Switch,
  Route, 
  HashRouter
} from 'react-router-dom';

import './assets/css/reset.css'
import './assets/css/font.css'
import './assets/css/global.css'

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
// const MainPage = lazy(() => import('./pages/MainPage'));
// const AboutPage = lazy(() => import('./pages/AboutPage'));
// const ProjectPage = lazy(() => import('./pages/ProjectPage'));

function App() {
  return (
    <HashRouter>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Switch>
          <Route exact path="/" render={routeProps => <MainPage {...routeProps} />}/>
          <Route path="/about" component={AboutPage} />
          <Route path="/project/:num" component={ProjectPage} />
        </Switch>        
      {/* </Suspense> */}
    </HashRouter>
  );
}

export default App;
