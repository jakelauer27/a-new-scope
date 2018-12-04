import React, { Component } from 'react'
import StarHousingComponent from '../Stars/StarHousingComponent'
// import Landing from '../Landing/Landing'
import Menu from '../Menu/Menu'
// import Main from '../Main/Main'
import './app.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 'menu'
    }
  }

  changePage = (page) => {
    this.setState({ currentPage: page })
  }

  render() {
    const { currentPage } = this.state
    return (
      <div className="App">
      <StarHousingComponent />
        {renderHelper[currentPage]}
      </div>
    )
  }
}

/*************
 PRIVATE
*************/
const renderHelper = {
  // landing: <Landing />,
  menu: <Menu />,
  // people: <Main category='people'/>,
  // planets: <Main category='planets'/>,
  // vehicles: <Main category='vehicles'/>,
}

export default App;
