import Main from './Main';
import Detail from './Detail'
import { Route } from "react-router-dom";


function App() {



  return (
    <div className="App">

      <Route path="/" exact>
        <Main />
      </Route>


      <Route path="/detail/:DetailDay">
        <Detail />
      </Route>

    </div>
  );
}







export default App;
