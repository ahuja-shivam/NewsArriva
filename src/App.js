import React, { Component } from 'react'
import News from './Components/News'
import Navbar from './Components/Navbar'
import FixedBottomNavigation from './Components/Bottom'

// import Slide from './Components/Slide'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <News/>
        <FixedBottomNavigation />
      </>
    )
  }
}
