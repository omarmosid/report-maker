import React, { Component } from 'react'

class Container extends Component {
  render() {
    return (
      <div style={{border: "1px solid red", width: "100%", height: "50vh", boxSizing: "border-box"}}>
        {this.props.children}
      </div>
    )
  }
}

export default Container
