import React from 'react'

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
      return <h1>{location.state.title}</h1>
    } else {
      return null;
    }
  }
}

export default Detail
