import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({post}) => {
  return (
    <li className='card'>
      <NavLink to={`/post/${post.id}`}>
        <img src={post.imagePost} />
        <div className="infos">
            <h2>{post.titrePost}</h2>
            <p>{post.contentPost}</p>
        </div>
      </NavLink>
    </li>
  )
}

export default Card