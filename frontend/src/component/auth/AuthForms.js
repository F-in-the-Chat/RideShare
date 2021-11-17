import React, { useRef, useState } from "react";
import Card from "../ui/Card";
import classes from "./AuthForms.module.css";

function SignInForm() {
  // Retrieve data from in the input fields once
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const submiteHandler = (event) => {
    // Prevents browser default
    event.preventDefault();
    let formData = {
      username:username,
      password:password
    }
    //Submit Form data through ajax request to server endpoint
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submiteHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Username</label>
          <input type="text" required value={username} onChange={(event)=>{setUsername(event.target.value)}}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Password</label>
          <input type="text" required value={password} onChange={(event)=>{setPassword(event.target.value)}}></input>
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
    </Card>
  );
}

export function SignUpForm() {
  // Retrieve data from in the input fields once
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")

  const submiteHandler = (event) => {
    // Prevents browser default
    event.preventDefault();
    let formData = {
      username:username,
      password:password,
      email:email
    }
    //Submit Form data through ajax request to server endpoint
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submiteHandler}>
      <div className={classes.control}>
          <label htmlFor="title">Email</label>
          <input type="text" required value={username} onChange={(event)=>{setEmail(event.target.value)}}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Username</label>
          <input type="text" required value={username} onChange={(event)=>{setUsername(event.target.value)}}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Password</label>
          <input type="text" required value={password} onChange={(event)=>{setPassword(event.target.value)}}></input>
        </div>
        <div className={classes.actions}>
          <button>Sign Up</button>
        </div>
      </form>
    </Card>
  );
}

export default SignInForm;
