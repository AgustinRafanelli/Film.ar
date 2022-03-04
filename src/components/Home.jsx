import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

import ListItems from "../commons/utils/ListItems"
import useInput from "../hooks/useInput"

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
//const [topRatedMovies, setTopRatedMovies] = useState([])
  const navigate = useNavigate()
  const search = useInput()

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=075bbbc5b5b69e9ced180c9d6ba25e98&language=en-US`)
      .then(res => setTopRatedMovies(res.data))
      .catch(err => console.log(err))

    axios.get(`https://api.themoviedb.org/3/movie/popular/?api_key=075bbbc5b5b69e9ced180c9d6ba25e98&language=en-US`)
      .then(res => setPopularMovies(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log('rated ', topRatedMovies)
  console.log('popular ', popularMovies)
  if (!topRatedMovies.page || !popularMovies.page) return <></>

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://api.themoviedb.org/3/search/movie/?query=${search.value}&api_key=075bbbc5b5b69e9ced180c9d6ba25e98`)
      .then(res => setTopRatedMovies(res.data))
      .then(navigate(`/movies/${search.value}`))
      .catch(err => console.log(err))
  }

  return (
    <div className="movies">
      <form onSubmit={handleSubmit}>
        <input {...search} type="text" placeholder="Search" />
      </form>
      <div className="columns">
        <div className="column is-one-half">
          <h3>Popular movies</h3>
          <ListItems items={popularMovies.results} />
        </div>
        <div className="column is-one-half">
          <h3>Top rated movies of all time</h3>
          <ListItems items={topRatedMovies.results} />
        </div>
      </div>
    </div>
  )
}
export default Home