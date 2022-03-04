import { useEffect, useState } from "react"
import axios from 'axios'

import ListItems from '../utils/ListItems'
import { useParams } from "react-router-dom"

const SingleUser = () => {
  const id = useParams().id
  const [user, setUser] = useState({})
  const [favorites, setFavorites] = useState(0)

  useEffect(() => {
    axios.get(`/api/users/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
    axios.get(`/api/favorites/${id}`)
      .then(res => res.data)
      .then( (data) => {
        Promise.all(data.map( (item) =>{
          return axios.get(`https://api.themoviedb.org/3/movie/${item.movieId}?api_key=075bbbc5b5b69e9ced180c9d6ba25e98`)
            .then(res => res.data)
        }))
          .then(data => setFavorites(data))
      })
      .catch(err => console.log(err))
  }, [id])

  if(!user.id || !favorites) return <></>

  return (
    <div className="single-user">
      <h2>{user.name}</h2>
      <ul>
        <h3>Favoritos</h3>
        <ListItems items={favorites}/>
      </ul>
    </div>
  )
}

export default SingleUser