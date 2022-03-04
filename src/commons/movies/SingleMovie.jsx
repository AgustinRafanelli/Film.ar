import { useEffect, useState } from "react"
import axios from 'axios'

import { useParams } from "react-router-dom"

const SingleMovie = () => {
  const id = useParams().id
  const [movie, setMovie] = useState({})

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=075bbbc5b5b69e9ced180c9d6ba25e98`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err))
  }, [id])

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  if(!movie.id) return <></>

  return (
    <div className="single-movie">{console.log(movie)}
      <img src={`https://www.themoviedb.org/t/p/w300_and_h450_face${movie.poster_path}`} alt="" />
      
        <div className="header">
          <h1>{movie.title}</h1>
          <div className="genres">
            {movie.genres.map(genre => <span>+{genre.name}</span>)}
          </div>
        </div>
      <div className="info">
        <p>Produced by:{movie.production_companies.map(companie => <> {companie.name},</>)} </p>
        <p>Rating: {movie.vote_average}/10 with {movie.vote_count} votes</p>
        <p>Date of release: {movie.release_date}</p>
        <p>Duration: {Math.floor(movie.runtime/60)}:{movie.runtime%60}h</p>
        <p>Budget: {formatter.format(movie.budget)}</p>
        <p>Revenue: {formatter.format(movie.revenue)}</p>
      </div>
      <p>{movie.overview}</p>
      
    </div>
  )
}

export default SingleMovie