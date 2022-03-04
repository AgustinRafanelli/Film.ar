import axios from "axios"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addFavorites } from "../../state/user"

const MovieCard = ({ item }) => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleClick = (e)=>{
    axios.post(`/api/favorites?userId=${user.id}`, { name: item.title, movieId: item.id})
      .then(()=> dispatch(addFavorites(user.id)))
      .catch(err=> console.log(err))
  }

  return (
      <div className="movie-card">
      <Link to={`/movie/${item.id}`}>
        <h4>{item.title} ({item.vote_average})</h4>
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`} alt="" />
      </Link>
      { user.id ? <button onClick={handleClick}>corazon</button> : <></>}
      </div>
  )
}

export default MovieCard