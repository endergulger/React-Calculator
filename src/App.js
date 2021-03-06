import React, { Component } from 'react'
import './App.css'
import ResultComponent from './components/ResultComponent'
import KeyPadComponent from './components/KeyPadComponent.js'

class App extends Component {
  state = {
    result: '',
  }

  onClick = (button) => {
    if (button === '=') {
      this.calculate()
    } else if (button === 'C') {
      this.reset()
    } else if (button === 'CE') {
      this.backspace()
    } else {
      this.setState({
        result: this.state.result + button,
      })
    }
  }

  calculate = () => {
    let checkResult = ''
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    } else {
      checkResult = this.state.result
    }

    try {
      this.setState({
        result: (Number.isInteger(eval(checkResult)) ? eval(checkResult) : '') + '',
      })
    } catch (e) {
      this.setState({
        result: 'error',
      })
    }
  }

  reset = () => {
    this.setState({
      result: '',
    })
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    })
  }

  render() {
    return (
      <div className='hesapmakinesi'>
        <ResultComponent result={this.state.result} />
        <KeyPadComponent onClick={this.onClick} />
      </div>
    )
  }
}

export default App
