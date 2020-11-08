import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import loadable from '@loadable/component';
import RenderSelect from './render-component/RenderSelect';
// import Table from './Table.jsx'

const RenderMoovingText = loadable(() => import('./render-component/RenderMoovingText.jsx'));
const RenderCard = loadable(() => import('./render-component/RenderCard.jsx'));
const RenderSlider = loadable(() => import('./render-component/RenderSlider.jsx'));

const Home = loadable(() => import('./Home.jsx'));


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/card' component={RenderCard} />
          <Route exact path='/mooving-text' component={RenderMoovingText} />
          <Route exact path='/slider' component={RenderSlider} />
          <Route exact path='/select' component={RenderSelect} />

          <Route path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
