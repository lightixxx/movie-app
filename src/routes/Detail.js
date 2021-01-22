import React from 'react'
import './Detail.css'

class Detail extends React.Component {
  conponentDidMount() {
    const { location, history } = this.props
    if (location.state === undefined) {
      history.push('/')
    }
  }

  render(props) {
    const { location } = this.props

    if (location.state) {
      return (
        <div className="detail__container">
          <img src={location.state.poster} alt={location.state.title} />
          <div className="detail__data">
            <h3 className="detail__title">{location.state.title}</h3>
            <div className="detail__info">
              <h5 className="detail__year">{location.state.year}</h5>
              <ul className="detail__genres">
                {location.state.genres.map((genre, index) => {
                  return <li className="detail__genre" key={index}>{genre}</li>
                })}
              </ul>
            </div>
            <p className="detail__summary">{location.state.summary.slice(0, 300)}...</p>
          </div>

        </div>
      )
    } else {
      return null;
    }
  }
}

export default Detail
