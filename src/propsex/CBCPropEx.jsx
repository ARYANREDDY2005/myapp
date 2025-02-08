import React, { Component } from 'react'

export default class CBCPropEX extends Component {
  render() {
    return (
      <div className='props'>
      <h1>  Name:{this.props.username}</h1> 
      <h1> age: {this.props.age}</h1> 
      {
        this.props.hobbies.map(hobby=>{
            return  <li>{hobby}</li>
        })
      }
      <h1>{this.props.address.city}</h1>
      <button className='button' onClick={this.props.sendFun}>Click</button>

      


      </div>
    )
  }
}
