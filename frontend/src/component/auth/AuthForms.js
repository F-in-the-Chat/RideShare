import React, { useContext, useState } from "react"; // useRef
import { Link } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./AuthForms.module.css";
import axios from "axios";
import TokenContext from "../../AppContext";

export function SignInForm() {
  // Retrieve data from in the input fields once
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  //Get token context to store auth token
  const {tokenContext,setToken} = useContext(TokenContext)

  const submiteHandler = (event) => {
    // Prevents browser default
    event.preventDefault();
    let formData = {
      email:email,
      password:password
    }
    //Submit Form data through axios request to server endpoint
    axios.post("http://localhost:5004/login", formData)
    .catch((err) => {
      console.log(err.message);
    }).then((res)=>{
      setToken(res.data)
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
          <input type="text" required value={password} onChange={(event)=>{setPassword(event.target.value)}}></input>
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
    axios.post("http://localhost:5004/signup", formData)
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
            <input type="text" required value={password} onChange={(event)=>{setPassword(event.target.value)}}></input>
        </div>
        <div className={classes.actions}>
          <button>Sign Up</button>
        </div>
        <small>Or <Link to="/login">Sign In</Link></small>
      </form>
    </Card>
  );
}

