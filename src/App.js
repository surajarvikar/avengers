import './App.css';
import Home from './Components/Home';
import Contacts from './Pages/Contacts'
import Headers from './Pages/Headers'
import Heros from './Pages/Heros';
import {Route , Switch} from "react-router-dom"

function App() {
  return (
    <>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/header" component={Headers} />
       <Route  path="/contact" component={Contacts} />
       <Route  path="/character" component={Heros} />
       
     </Switch>
    </>
  );
}

export default App;
