import {Component} from 'react'
import {FaSearch} from 'react-icons/fa'

import PlayListItem from '../PlayListItem'

import './index.css'

class PlayListComponent extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.values})
  }

  render() {
    const {searchInput} = this.state
    const {initialTracksList} = this.props
    console.log(initialTracksList)
    return (
      <div className="app-container">
        <div className="titles-container">
          <h1 className="singer-name">Ed Sheeran</h1>
          <h1 className="occupation">Singer</h1>
        </div>
        <ul className="playlist-container">
          <div className="playlist-heading-searchbar-container">
            <h1 className="playlist-heading">Songs Playlist</h1>
            <div className="search-input-container">
              <input
                type="search"
                value={searchInput}
                placeholder="Search"
                className="search-input"
                onChange={this.onChangeSearchInput}
              />
              <button type="button" label="true" className="search-button">
                <FaSearch color="white" />
              </button>
            </div>
          </div>
          {initialTracksList.map(eachTrackItem => (
            <PlayListItem
              key={eachTrackItem.id}
              eachTrackDetails={eachTrackItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default PlayListComponent
