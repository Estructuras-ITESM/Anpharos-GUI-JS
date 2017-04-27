/**
 * Created by sergio on 4/26/17.
 */
import React, {Component} from  'react';
import Controls from './Controls'
import Input from './Input'
import Canvas from './Canvas'
import './Styles/styles.css'

class Main extends Component {
  render(){
    return(
      <div className="main-wrapper">
        <Controls/>
        <Canvas/>
        <Input />
      </div>
    )
  }
}

export default Main