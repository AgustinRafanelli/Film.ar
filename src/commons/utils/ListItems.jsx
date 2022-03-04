import { useParams } from 'react-router-dom'
import UserCard from '../users/UserCard'
import MovieCard from '../movies/MoveCard'
import SideCard from '../movies/SideCard'

const ListItems = ({items, isSide = false}) => {
  const path = useParams()['*']
  
  return (
    <ul>
      {items.map((item, i)=> {
        return (isSide ? (<li key={i} ><SideCard item={item} /> </li> ) : (
          path === 'users' ? (
            <li key={i}> <UserCard item={item} /> </li>
          ) : (
            <li key={i}> <MovieCard item={item} /></li>
          ))
        ) 
      })}
    </ul>
  )
}

export default ListItems