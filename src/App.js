import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import loadable from '@loadable/component';
// import Table from './Table.jsx'

const RenderMovingText = loadable(() => import('./render-component/RenderMovingText.jsx'));
const RenderCard = loadable(() => import('./render-component/RenderCard.jsx'));
const RenderSlider = loadable(() => import('./render-component/RenderSlider.jsx'));
const RenderSelect = loadable(() => import('./render-component/RenderSelect.jsx'));
const RenderLongTextCutter = loadable(() => import('./render-component/RenderLongTextCutter.jsx'));
const RenderSwipeToReload = loadable(() => import('./render-component/RenderSwipeToReload.jsx'));

const Home = loadable(() => import('./Home.jsx'));


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/card' component={RenderCard} />
          <Route exact path='/moving-text' component={RenderMovingText} />
          <Route exact path='/slider' component={RenderSlider} />
          <Route exact path='/select' component={RenderSelect} />
          <Route exact path='/long-text-cutter' component={RenderLongTextCutter} />
          <Route exact path='/swipe-to-reload' component={RenderSwipeToReload} />

          <Route path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
