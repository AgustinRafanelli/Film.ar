import useInput from "../hooks/useInput"
import { useNavigate } from "react-router-dom"

import { useDispatch } from "react-redux"
import { login } from "../state/user"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const email = useInput()
  const password = useInput()

  const handleSubmit = e =>{
    e.preventDefault()
    dispatch(login({
      email: email.value.toLowerCase(),
      password: password.value
    }))
      .then(data => {
        if(data.payload.id){
          navigate("/") 
        } else { navigate('/login')}  
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div>
          <span>Email: </span>
          <input {...email} type='email' />
        </div>
        <div >
          <span>Password: </span>
          <input {...password} type="password" />
        </div>
        <button>Send</button>
      </form>
    </div>
  )
}

export default Login