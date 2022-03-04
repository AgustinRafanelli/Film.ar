import { Routes, Route, Navigate } from 'react-router-dom'

import Movies from '../commons/movies/Movies'
import Users from '../commons/users/Users'
import SingleUser from '../commons/users/SingleUser'
import SingleMovie from '../commons/movies/SingleMovie'
import Home from './Home'

const Content = () => {
  return (
    <div className='container py-4'>
      <Routes>
        <Route path="movies/" element={<Home />} />
        {/* Home tendria que tener peliculas y programas de tv, 
        pero solo tiene peliculas por una cuestion de tiempos */}
        <Route path="movies/:query" element={<Movies />} />
        <Route path="users" element={<Users />} />
        <Route path="user/:id" element={<SingleUser />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  )
}

export default Content