
import {signInWithGoogle} from '../../../APPServices/firebase'
import s from './Login.module.scss'
const Login = () => {
    
   
  return (
    <div className={s.SingIn}>
        <button onClick={signInWithGoogle}><i ></i>Sign in with google</button>
    </div>
  )
}

export default Login