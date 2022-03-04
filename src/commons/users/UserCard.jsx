import { Link } from "react-router-dom"

const UserCard = ({ item }) => {

  return (
    <Link to={`/user/${item.id}`}>
      <div className="card">
        <h3>{item.name}</h3>
        <p>{item.email}</p>
        <p className="card-footer-it">{item.favCount} Favoritos</p>
      </div>
    </Link>
  )
}

export default UserCard