import './assets/css/reset.css'
import './assets/css/font.css'
import './assets/css/global.css'
import {
  BrowserRouter,
  Switch,
  Route } from 'react-router-dom';
import {
  MainPage,
  AboutPage,
  ProjectPage,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/project">
          <ProjectPage />
        </Route>
      </Switch>        
    </BrowserRouter>
  );
}

export default App;
