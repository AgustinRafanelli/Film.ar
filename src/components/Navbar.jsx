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
    <div className="navbar">
      <Link to={"/"}><h3>TMDB</h3></Link>
      <div>
        <div className='navegation'>
          <Link to={"/movies"}><button>Peliculas</button></Link>
          <Link to={"/users"}><button>Usuarios</button> </Link>
        </div>
        <div className='user'>
          { user.id ? (<>
            <Link to={`/user/${user.id}`}><span>{user.name}</span></Link>
            <button onClick={handleClick}>Logout</button>
          </> ) : (
            <>
              <Link to={'/login'}><button>Login</button></Link>
              <Link to={'/singup'}><button>Sing Up</button></Link>
            </>
          )}
          
         
        </div>
      </div>
      
    </div>
  )
}

export default Navbar