import { Route } from "react-router-dom";
import Houses from './components/Houses/Houses';
import HouseDetail from './components/HouseDetail/HouseDetail';
import CreateHouse from './components/CreateHouse/CreateHouse';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' component={Houses} />
      <Route exact path='/houses/:houseId' component={HouseDetail} />
      <Route exact path='' component={CreateHouse} />
    </div>
  );
}

export default App;
