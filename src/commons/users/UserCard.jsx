import { Link } from "react-router-dom"

const UserCard = ({ item }) => {

  return (
    <Link to={`/user/${item.id}`}>
      <div className="user-card">
        <h4>{item.name}</h4>
        <p>{item.email}</p>
        <p>{item.favCount} Favoritos</p>
      </div>
    </Link>
  )
}

export default UserCard