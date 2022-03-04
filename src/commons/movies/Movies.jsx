import { useEffect, useState } from "react"
import useInput from "../../hooks/useInput"
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"

import ListItems from '../utils/ListItems'

const Movies = () => {
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()
  const search = useInput(useParams().query)
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie/?query=${search.value}&api_key=075bbbc5b5b69e9ced180c9d6ba25e98`)
      .then(res => setMovies(res.data))
      .catch(err => console.log(err))
  }, [])

  if(!movies.page) return <></>

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.get(`https://api.themoviedb.org/3/search/movie/?query=${search.value}&api_key=075bbbc5b5b69e9ced180c9d6ba25e98`)
      .then(res => setMovies(res.data))
      .then(navigate(`/movies/${search.value}`))
      .catch(err => console.log(err))
  }

  return (
    <div className="movies">
      <form onSubmit={handleSubmit}>
        <input {...search} type="text" placeholder="Search"/>
      </form>

      <ListItems items={movies.results} />
    </div>
  )
}
export default Movies