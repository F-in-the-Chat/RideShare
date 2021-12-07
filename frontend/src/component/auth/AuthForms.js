import React, { useContext, useEffect, useState } from "react"; // useRef
import { Link,useHistory } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./AuthForms.module.css";
import axios from "axios";
import TokenContext from "../../AppContext";

export function SignInForm() {
  // Retrieve data from in the input fields once
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  //State to deal with form errors
  const [usernameError,setUsernameError] = useState(null)
  const [passwordError,setPasswordError] = useState(null)
  //Get token context to store auth token
  const {tokenContext,setToken} = useContext(TokenContext)
  //History to navigate programatically
  const history = useHistory();

  const submiteHandler = (event) => {
    // Prevents browser default
    event.preventDefault();
    let formData = {
      email:email,
      password:password
    }
    //Submit Form data through axios request to server endpoint
    axios.post("http://rs.res.tf:5004/login", formData)
    .catch((err) => {
      console.log(err.message);
    }).then((res)=>{
      if(!["Invalid Password","Invalid Username"].includes(res.data)){
        setPasswordError(null)
        setUsernameError(null)
        setToken(res.data) // token is stored?
        history.push("/rides")
      }
      else if(res.data == "Invalid Password"){
        setPasswordError(res.data)
      }
      else if(res.data == "Invalid Username"){
        setUsernameError(res.data)
      }
    });
  };

useEffect(()=>{
  console.log(passwordError)
},[passwordError])

  return (
    <Card>
      <form className={classes.form} onSubmit={submiteHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Email</label>
          <input type="text" required value={email} onChange={(event)=>{setEmail(event.target.value)}} className={usernameError?classes.formError:null}></input>
          <small style={{color:"red",visibility:usernameError?"visible":"hidden"}}>Invalid Email</small>
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Password</label>
          <input type="password" required value={password} onChange={(event)=>{setPassword(event.target.value)}} className={passwordError?classes.formError:null}></input>
          <small style={{color:"red",visibility:passwordError?"visible":"hidden"}}>Invalid Password</small>
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
        <small>Or <Link to="/join">Sign Up</Link></small>
      </form>
    </Card>
  );
}

export function SignUpForm() {
  // Retrieve data from in the input fields once
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")

  const submiteHandler = (event) => {
    // Prevents browser default
    event.preventDefault();
    let formData = {
      password:password,
      email:email
    }
    //Submit Form data through axios request to server endpoint
    axios.post("http://rs.res.tf:5004/signup", formData)
    .catch((err) => {
      console.log(err.message);
    });
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submiteHandler}>
        <div className={classes.control}>
            <label htmlFor="title">Email</label>
            <input type="text" required value={email} onChange={(event)=>{setEmail(event.target.value)}}></input>
        </div>
        <div className={classes.control}>
            <label htmlFor="title">Password</label>
            <input type="password" required value={password} onChange={(event)=>{setPassword(event.target.value)}}></input>
        </div>
        <div className={classes.actions}>
          <button>Sign Up</button>
        </div>
        <small>Or <Link to="/login">Sign In</Link></small>
      </form>
    </Card>
  );
}

