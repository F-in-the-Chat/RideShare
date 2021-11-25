import React, { useContext } from "react";
import TokenContext from "../AppContext";
import {SignInForm} from "../component/auth/AuthForms";

function SignIn() {
  const {tokenContext,setToken} = useContext(TokenContext)
  console.log(tokenContext)
  return (
    <section>
      <h1>Log in</h1>
      <SignInForm />
    </section>
  );
}

export default SignIn;