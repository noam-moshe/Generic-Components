import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import loadable from '@loadable/component';
// import Table from './Table.jsx'

const RenderMoovingText = loadable(() => import('./render-component/RenderMoovingText.jsx'));
const RenderCard = loadable(() => import('./render-component/RenderCard.jsx'));
const Home = loadable(() => import('./Home.jsx'));


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/card' component={RenderCard} />
          <Route exact path='/mooving-text' component={RenderMoovingText} />

          <Route path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
