import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import ListItems from "../commons/utils/ListItems"

const Sidebar = () => {
  const {id, favCount} = useSelector((state)=> state.user)
  const [favorites, setFavorites] = useState()

  useEffect(()=>{
    axios.get(`/api/favorites/${id}`)
      .then(res => res.data)
      .then((data) => {
        Promise.all(data.map((item) => {
          return axios.get(`https://api.themoviedb.org/3/movie/${item.movieId}?api_key=075bbbc5b5b69e9ced180c9d6ba25e98`)
            .then(res => res.data)
        }))
          .then(data => setFavorites(data))
      })
      .catch(err => console.log(err))
  }, [favCount])

  if(!favorites) return <></>
  
  return (
    <div className="column is-one-fifth">
      <aside className="menu  ">
        <h4>Tus Favoritos</h4>
        <ListItems items={favorites} isSide={true} />
      </aside>
    </div>
  )
}

export default Sidebar