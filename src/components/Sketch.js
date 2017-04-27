/**
 * Created by sergio on 4/26/17.
 */
export default function sketch (p5) {
  let rotation = 0;
  let minHeight = 300;
  let minWidth = 300;
  let resize = false;


  p5.setup = function (){
    const doc = document.getElementById('canvas');
    p5.createCanvas(doc.clientWidth, doc.clientHeight, p5.WEBGL);
  };

  p5.windowResized = function(){
    console.log("hello");
    const doc = document.getElementById('canvas');
    p5.resizeCanvas(doc.clientWidth, doc.clientHeight);
  }


  p5.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if (props.rotation) {
      console.log("Props "+props.rotation);
      rotation = props.rotation * Math.PI / 180;
    }
    if (props.height && props.width) {
      console.log("Props "+props.height);
      console.log("Props "+ props.width);
      resize = true;
      //this.resizeCanvas(0,0);
    }
  }


  p5.draw = () => {
    p5.background(100);
    rotation += 0.01;
    p5.noStroke();
    p5.push();
    p5.rotateY(rotation);
    p5.rotateX(rotation);
    p5.box(100);
    p5.pop();
  }


}
