/**
 * Created by sergio on 4/26/17.
 */
import React, {Component} from  'react';
import P5Wrapper from 'react-p5-wrapper';
import Sketch from './Sketch'

class Canvas extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: undefined,
      width: undefined,
    }
  }
  componentDidMount(){
    const height = document.getElementById('canvas').clientHeight;
    const width = document.getElementById('canvas').clientWidth;
    this.setState({ height, width });
  }



  changeWidthHeight(width, height) {
    console.log("changing");
    this.setState({ height, width });
    console.log("changed");
  }
  render(){
    return (
      <div className="canvas-wrapper" id="canvas">
        {/*<h1>Canvas</h1>
        <p>{this.state.width}</p>
        <p>{this.state.height}</p>*/}
        <P5Wrapper sketch={Sketch}  rotation={1000}/>
      </div>
    )
  }
}

export default Canvas