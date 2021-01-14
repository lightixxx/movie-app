
import React from 'react'
// import propTypes from 'prop-types'


// function App() {
//   return (
//     <div className="App" >
//       {
//         foodILike.map((dish) => {
//           return <Food name={dish.name} picture={dish.image} key={dish.id} rating={dish.rating} />
//         })
//       }
//     </div>
//   )
// }
class App extends React.Component {


  add = () => {
    this.setState(currunt => ({
      age: currunt.age + 1
    }));
  }

  minus = () => {
    this.setState({
      age: this.state.age - 1
    })
  }

  state = {
    name: 'lightix',
    age: 29
  }

  render() {
    return (
      <>
        <h1>Hello, I'm {this.state.name}</h1>
        <h2>My age is...{this.state.age}</h2>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </>
    )
  }
}


export default App;
