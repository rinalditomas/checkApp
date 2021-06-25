import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

const Login = () => {
const [toogle,setToogle]= useState(true)

    return (
        <div className="wrapper">

            
            <div className="title-text">
            {
                toogle ?  
                 <div className="title login">
                Login Form
                </div> :
                <div className="title signup">
                    Signup Form
                </div>
            }  
            </div>
            <div className="form-container">
                <div className="slide-controls">
                <input type="radio" name="slide" className="login" id='login' checked/>
                <input type="radio" name="slide" className="signup" id='signup' />
                <label htmlFor="login" className="slide login" onClick={()=>setToogle(false)}>Login</label>
                <label htmlFor="signup" className="slide signup" onClick={()=>setToogle(true)}>SignUp</label>
                <div className="slider-tab"></div>
                </div>

                <div className="form-inner">
                        {
                            toogle ?
                            <form action="#" className="login">
                            <div className="field">
                            <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className="field">
                            <input type="password" placeholder="Password" required />
                            </div>
                            <div className="pass-link">
                            <Link to='#'>Forgot password?</Link>
                            </div>
                            <div className="field btn">
                                <div className="btn-layer">
                                    <input type="submit" value="login"/>
                                </div>
                            </div>
                            <div className="signup-link">
                            Not a member? <Link to='#'>Signup now</Link>
                            </div>
                        </form> 
                        :
                        <form action="#" className="signup">
                        <div className="field">
                        <input type="text" placeholder="Email Address" required />
                        </div>
                        <div className="field">
                        <input type="password" placeholder="Password" required />
                        </div>
                        <div className="field">
                        <input type="password" placeholder="Confirm password" required />
                        </div>
                        
                        <div className="field btn">
                            <div className="btn-layer">
                                <input type="submit" value="signup"/>
                            </div>
                        </div>
                        
                        </form>
                        }
                
                
                </div> 
            </div>
        </div>
      
    )
}

export default Login

