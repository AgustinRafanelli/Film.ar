import Content from './Content'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Login from './Login'
import SingUp from './SingUp'
import Home from './Home'
import {Route, Routes} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { setUser } from '../state/user'

const App = ()=>{
  const user = useSelector( state => state.user)
  const dispatch = useDispatch()

  useEffect(()=>{
    axios.get('/api/login/me')
      .then((res => {
        if (res.data)dispatch(setUser(res.data))
      }))
      .catch((err)=>console.error(err))
  }, [])

  return(
    <>
      <Navbar />
      <div>
        {user.id ? <Sidebar /> : <></>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<SingUp/>} />
          <Route path="/*" element={<Content/>}/>
          <Route path='/404' element={<h1>Pagina no encontrada</h1>} />
        </Routes>
      </div>
    </>
  )
}

export default App