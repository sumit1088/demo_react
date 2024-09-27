import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    //   this.clickHandler = this.clickHandler.bind(this) 3. Binding in class constructor
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // }

    //4.Binding in class arrow function
    clickHandler = () => {
        this.setState({
            message: 'GoodBye!'
        })
    }

  render() {
    return (
      <div>        
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */} 1.binding in render
        {/* <button onClick={ () => this.clickHandler()}>Click</button> */}   2.Arrow function in render
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind