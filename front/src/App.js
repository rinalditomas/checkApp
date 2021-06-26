import EmployerHome from './components/EmployerHome/EmployerHome'
import {Switch,Route,Redirect} from 'react-router-dom'
import Login from './components/Login-Register/Login'

function App() {
  return (
    <div>
        <Switch>
        <Route exact path="/EmployerHome" component={EmployerHome} />
          {/* <Route to='/' component={Main}/> */}
          <Route path='/login' component={Login}/>
          <Redirect to="/login" />
        </Switch>
    </div>
 
  );
}

export default App;
