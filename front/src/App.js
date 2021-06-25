
import {Switch,Route,Router} from 'react-router-dom'
import Login from './components/Login-Register/Login'

function App() {
  return (
    <div>
        <Switch>
          {/* <Route to='/' component={Main}/> */}
          <Route path='/login' component={Login}/>
        </Switch>
    </div>
 
  );
}

export default App;
