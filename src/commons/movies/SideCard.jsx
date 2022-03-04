import axios from "axios"
import { Link } from "react-router-dom"
import { useSelector , useDispatch} from "react-redux"
import { removeFavorites, setUser } from "../../state/user"

const SideCard = ({ item }) => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleClick = (e)=>{
    axios.delete(`/api/favorites?userId=${user.id}&movieId=${item.id}`)
      .then(() => dispatch(removeFavorites(user.id)))
      .catch(err => console.error(err))
  }

  return (
      <div className="movie-card">
        <Link to={`/movie/${item.id}`}>
          <h5>{item.title} ({item.vote_average})</h5>
          <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${item.poster_path}`} alt="" />
        </Link>
        <button onClick={handleClick}>corazonn't</button>
      </div>
  )
}

export default SideCard