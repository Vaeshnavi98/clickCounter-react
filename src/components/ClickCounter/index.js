import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  buttonCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-div">
        <h1>
          The button has been clicked <span>{count}</span> times
        </h1>
        <p>click the button to increase the count</p>
        <button onClick={this.buttonCount}>Click Me</button>
      </div>
    )
  }
}

export default ClickCounter
