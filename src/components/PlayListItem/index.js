import {FaTrash} from 'react-icons/fa'

import './index.css'

const PlayListItem = props => {
  const {eachTrackDetails} = props
  const {imageUrl, name, genre, duration} = eachTrackDetails

  return (
    <li className="playlist-item-container">
      <img src={imageUrl} alt="track" className="track-item-image" />
      <div className="content-container">
        <div className="name-genre-container">
          <h1 className="name-text">{name}</h1>
          <p className="genre-text">{genre}</p>
        </div>
        <div className="duration-delete-icon-container">
          <p className="duration-text">{duration}</p>
          <FaTrash color="white" className="delete-icon" />
        </div>
      </div>
    </li>
  )
}

export default PlayListItem
