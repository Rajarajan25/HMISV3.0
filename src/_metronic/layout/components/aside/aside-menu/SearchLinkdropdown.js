/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class SearchLink extends Component {
  constructor(props){
    super(props)
    this.state = {
     box1Hover:false,
     box2Hover:false,
     box3Hover:false,
     box4Hover:false,
    }
    this.trueDisplay = this.trueDisplay.bind(this)
    this.falseDisplay = this.falseDisplay.bind(this)
  }
  trueDisplay(e){

   this.setState({[e.target.name]:true})
  }
  falseDisplay(e){

   this.setState({[e.target.name]:false})
  }

  render() {
    return (
      <div>
       <div name="box1Hover" onMouseEnter={this.trueHover} onMouseLeave={this.falseHover}>
         ....
          // your on hover content in bellow line 
         {this.state.box1Hover?<h5>Mouse hovering over me</h5>:""}
        ....
       </div>
       <div name="box2Hover" onMouseEnter={this.trueHover} onMouseLeave={this.falseHover}>
         ....
          // your on hover content in bellow line 
         {this.state.box2Hover?<h5>Mouse hovering over me</h5>:""}
        ....
       </div>
       <div name="box3Hover" onMouseEnter={this.trueHover} onMouseLeave={this.falseHover}>
         ....
          // your on hover content in bellow line 
         {this.state.box3Hover?<h5>Mouse hovering over me</h5>:""}
        ....
       </div>
      </div>
      
    );
  }
}

export default SearchLink;