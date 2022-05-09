const { auth, provider } = require('../firebase');
import { signInWithRedirect } from 'firebase/auth';

function signIn() {
  signInWithRedirect(auth, provider).catch(alert);
}

export default function Login() {
  return (
    <div className="h-screen w-screen grid items-center text-center">
      <button onClick={signIn}>
        Sign in with Google
      </button>
    </div>
  );
}
