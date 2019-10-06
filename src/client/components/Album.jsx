import React from "react"

class Albums extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: props.albums || []
    }
  }
  componentDidMount() {
    const albums = window.__ALBUMS__ ? JSON.parse(window.__ALBUMS__) : []
    delete window.__ALBUMS__
    this.setState({ albums })
    if (albums.length == 0) {
      
    }
  }
  render() {
    return (
      <div id="albums">
        {
          this.state.albums.map((item, i) => (
            <div className="album__item" key={item.id}>
              <div><img src={item.thumbnailUrl} /></div>
              <div>{item.title}</div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Albums