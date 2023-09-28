import { useEffect } from "react";
import "../App.css"

export default function SignInPage() {
  useEffect(() => {
    window.catalyst.auth.signIn("login", { signInProvidersOnly: false });
  }, []);
  return (
    <>
      <div id="login" className="Login-div"></div>
    </>
  );
}
