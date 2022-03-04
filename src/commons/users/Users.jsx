import { useEffect, useState } from "react"
import axios from 'axios'

import ListItems from '../utils/ListItems'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    axios.get('/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  },[])

  return (
    <div className="users">
      <ListItems items={users}/>
    </div>
  )
}

export default Users