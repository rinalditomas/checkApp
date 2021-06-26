import React from 'react'

import { Route, Switch,  } from "react-router-dom";
import Login from './components/Login-Register/Login';



export default  Main = ()=>{




    return(

        <div>

            <Switch>
                <Route path="/login" component={Login}/>

        
            </Switch>

        </div>
    )
}