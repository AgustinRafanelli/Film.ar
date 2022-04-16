import { Link } from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux'
import { setUser } from '../state/user'
import axios from 'axios'

const Navbar = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const handleClick = ()=>{
    axios.post(`/api/login/out`)
      .then(() => dispatch(setUser({})))
      .catch(err => console.error(err))
  }

  return (
    <nav className="navbar is-fixed-top has-shadow is-justify-content-space-between is-align-items-center	">
      <Link to={"/"}><h3 className='ml-5'>Film.ar</h3></Link>
      <div className='navegation'>
        <Link to={"/movies"}><button className='mx-1'>Peliculas</button></Link>
        <Link to={"/users"}><button className='mx-1' >Usuarios</button> </Link>
      </div>
      <div className='user mr-5'>
        { user.id ? (<>
          <Link to={`/user/${user.id}`}><span>{user.name}</span></Link>
          <button className='ml-2' onClick={handleClick}>Logout</button>
        </> ) : (
          <>
            <Link to={'/login'}><button className='mx-1'>Login</button></Link>
            <Link to={'/singup'}><button className='mx-1'> Sing Up</button></Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar