
import {signInWithGoogle} from '../../../APPServices/firebase'

const Login = () => {

   
  return (
    <div>
        <button onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
    </div>
  )
}

export default Login