import React, { Component } from 'react'
import { connect } from 'react-redux'


class TestComponent extends Component {
  render() {
    return (
      <div>
       <h1>Test Component</h1> 
       <h3>Than answer is : {this.props.data}</h3>
      </div>
    )
  }
}

const mapState = (state)=>({
    data:state.test.data
})
export default connect(mapState)(TestComponent);