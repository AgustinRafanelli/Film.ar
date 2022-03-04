import { Routes, Route, Navigate } from 'react-router-dom'

import Movies from '../commons/movies/Movies'
import Users from '../commons/users/Users'
import SingleUser from '../commons/users/SingleUser'
import SingleMovie from '../commons/movies/SingleMovie'

const Content = () => {
  return (
    <div className='Content'>
      <Routes>
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