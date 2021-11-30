import React, { useContext } from "react";
import TokenContext from "../AppContext";
import {SignInForm} from "../component/auth/AuthForms";

function SignIn() {
  return (
    <section>
      <h1>Log in</h1>
      <SignInForm />
    </section>
  );
}

export default SignIn;