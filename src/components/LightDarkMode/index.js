// Write your code here

import {Component} from 'react'
import './index.css'

let color = 'black'
class LightDarkMode extends Component {
  state = {
    value: 'Light Mode',
    name: 'card1',
    bool: true,
  }
  click = () => {
    let {bool} = this.state
    if (bool) {
      this.setState(each => ({
        bool: false,
        name: 'card1',
        value: 'Light Mode',
      }))
    } else {
      this.setState(each => ({
        bool: true,
        name: 'card2',
        value: 'Dark Mode', 
      }))
    }
  }

  render() {
    let {value, name} = this.state
    return (
      <div className="container">
        <div className={name}>
          <h1>Click To Change Mode</h1>
          <button onClick={this.click}>{value}</button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
