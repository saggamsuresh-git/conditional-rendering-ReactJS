import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state
  //     if (isLoggedIn === true) {
  //       return <button>Logout</button>
  //     }
  //     return <button>Login</button>
  //   }

  render() {
    const {isLoggedIn} = this.state
    // let authButton
    // if (isLoggedIn === true) {
    //   authButton = <button>Logout</button>
    // } else {
    //   authButton = <button>Login</button>
    // }
    return (
      <div className="container">
        <Welcome greeting="Hi" />
        {/* <Welcome greeting="Hello" name="User" /> */}
        {/* 1. {this.renderAuthButton()} */}
        {/* 2. {authButton} */}
        {/* {isLoggedIn ? <button>Logout</button> : <button>Login</button>} */}
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Logoin</button>}
      </div>
    )
  }
}

export default App
