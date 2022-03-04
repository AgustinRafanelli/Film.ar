import { useParams } from 'react-router-dom'
import UserCard from '../users/UserCard'
import MovieCard from '../movies/MoveCard'
import SideCard from '../movies/SideCard'

const ListItems = ({items, isSide = false}) => {
  const path = useParams()['*']
  
  return (
    <>
      {items.map((item, i)=> {
        return (isSide ? (<SideCard item={item} /> ) : (
          path === 'users' ? (
            <UserCard item={item} />
          ) : (
            <MovieCard item={item} />
          ))
        ) 
      })}
    </>
  )
}

export default ListItems