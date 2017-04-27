/**
 * Created by sergio on 4/26/17.
 */
import React, {Component} from  'react';
import { Button } from 'semantic-ui-react'


class Controls extends Component {
  render(){
    return (
      <div>
        <Button.Group className="button-wrapper">
          <Button>Move Forward</Button>
          <Button>Backward</Button>
          <Button>Rotate</Button>
          <Button>Move to</Button>
          <Button>Draw</Button>
          <Button>Don't Draw</Button>
          <Button>Hide Sphero</Button>
          <Button>Reset Sphero</Button>
        </Button.Group>
      </div>
    )
  }
}

export default Controls