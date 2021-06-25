import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import {auth} from '../../firebaseconfig'

const Login = () => {
const [toogle,setToogle]= useState(true)
const [input, setInput] = useState([]);

const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [key]: value });
  };
const handleSubmit = (e)=>{
    e.preventDefault()
    try {
        auth.createUserWithEmailAndPassword(input.email,input.password)
        alert("usuario registrado")
        
    } catch (e) {
        console.log(e)
    }
}

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
                <input type="radio" name="slide" className="login" id='login' />
                <input type="radio" name="slide" className="signup" id='signup' />
                <label htmlFor="login" className="slide login" onClick={()=>setToogle(false)}>Login</label>
                <label htmlFor="signup" className="slide signup" onClick={()=>setToogle(true)}>SignUp</label>
                <div className="slider-tab"></div>
                </div>

                <div className="form-inner">
                        {
                            toogle ?
                            <form  className="login">
                            <div className="field">
                            <input type="text" name='email' placeholder="Email Address" onChange={handleChange} required  />
                            </div>
                            <div className="field">
                            <input type="password" name='password' placeholder="Password" onChange={handleChange} required />
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
                        <form  className="signup">
                        <div className="field">
                        <input type="text" name='email' placeholder="Email Address" onChange={handleChange} required />
                        </div>
                        <div className="field">
                        <input type="password" name='password' placeholder="Password" onChange={handleChange} required />
                        </div>
                        <div className="field">
                        <input type="password" name='confirm-password' placeholder="Confirm password" onChange={handleChange} required />
                        </div>
                        
                        <div className="field btn">
                            <div className="btn-layer">
                                <input type="submit" value="signup" onClick={handleSubmit}/>
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

