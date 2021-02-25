import './App.css';
import Page from './components/Page';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Top from './components/Top';
import Newest from './components/Newest';
import Ask from './components/Ask';
import Show from './components/Show';
import Jobs from './components/Jobs';

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
          </Switch>
        </Page>
      </BrowserRouter>
    </div>
  );
}

export default App;
