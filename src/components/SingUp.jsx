import useInput from "../hooks/useInput"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SingUp = () => {
  const name = useInput()
  const email = useInput()
  const password = useInput()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('/api/users', {
      name: name.value,
      email: email.value.toLowerCase(),
      password: password.value
    })
      .then(res => res.data)
      .then(user => navigate(`/user/${user.id}`))
      .catch(err => console.log(err))
  }

  return (
    <div className="loguin">
      <form onSubmit={handleSubmit}>Sing Up
        <div>
          <span>Name: </span>
          <input {...name} type="text" />
        </div>
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

export default SingUp