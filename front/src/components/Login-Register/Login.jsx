import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Login.css'
import {auth} from '../../firebaseconfig'

const Login = () => {
const [toogle,setToogle]= useState(true)
const [input, setInput] = useState([]);
const [msgError,setMsgError] = useState(null)

const history = useHistory();

const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [key]: value });
  };
const handleSignUp = (e)=>{
    e.preventDefault()
  
        auth.createUserWithEmailAndPassword(input.email,input.password)
        .then(a => alert("usuario registrado"))
        .catch((e)=>{
            if(e.code == 'auth/invalid-email') setMsgError('Invalid email format')
            if(e.code == 'auth/weak-password')setMsgError('The password must have 6 characters or more')
            if(e.code == 'auth/email-already-in-use')setMsgError('The email is already registered')
        })

}

const handleLogin = (e)=>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(input.email,input.password)
    .then(a=> history.push("/EmployerHome"))
    .catch((e)=>{
        if(e.code == 'auth/invalid-email') setMsgError('Email is not registered')
        if(e.code == 'auth/wrong-password') setMsgError('Incorrect password')
        console.log(e.code)}
    )
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
                            {
                            msgError !== null ? <div style={{color:'red'}}>{msgError}</div> : null
                            }
                            <div className="field btn">
                                <div className="btn-layer">
                                    <input type="submit" value="login" onClick={handleLogin} />
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
                        {
                            msgError !== null ? <div style={{color:'red'}}>{msgError}</div> : null
                        }
                        
                        <div className="field btn">
                            <div className="btn-layer">
                                <input type="submit" value="signup" onClick={handleSignUp}/>
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

