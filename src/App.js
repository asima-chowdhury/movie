
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav/MainNav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route exact path="/" component={Trending}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/series" component={Series}/>
            <Route path="/search" component={Search}/>
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
