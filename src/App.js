import './App.css';
import Page from './components/common/Page';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Top from './components/stories/Top';
import Newest from './components/stories/Newest';
import Ask from './components/stories/Ask';
import Show from './components/stories/Show';
import Jobs from './components/stories/Jobs';
import Lists from './components/common/Lists';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Page>
          <Switch>
            <Route exact path="/"><Top /></Route>
            <Route path="/top"><Top /></Route>
            <Route path="/new"><Newest /></Route>
            <Route path="/ask"><Ask /></Route>
            <Route path="/show"><Show /></Route>
            <Route path="/jobs"><Jobs /></Route>
            <Route path="/lists"><Lists /></Route>
          </Switch>
        </Page>
      </BrowserRouter>
    </div>
  );
}

export default App;
