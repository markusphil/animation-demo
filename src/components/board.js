import React, {Component} from 'react';
import {TweenLite} from 'gsap';
import {Icosahedron} from '../graphics/icosahedron'



class Board extends Component {

    constructor(props) {
        super(props);
        //It seems that GSAP doesn't work with creatRef. So I'm using callback refs
        this.boardRef = null;
        this.boardTwenn = null;
        this.objectRef = null;
        this.objectTween = null;
        this.displayRef = null;
        this.displayTween = null;
        this.state = {
            x: 0,
            y: 0,
            slow: true
        }
    }

    componentDidUpdate() {
        this.boardTween = TweenLite.to(this.boardRef, this.state.slow ? 2.2 : 1.2, {rotationX: this.state.y, rotationY: this.state.x, transformPerspective: 800, transformOrigin:"center"});
        this.objectTween = TweenLite.to(this.objectRef , this.state.slow ? 2.2 : 1.2, {rotationX: 0.5*this.state.y, rotationY: 0.5*this.state.x, transformPerspective: 400, transformOrigin:"center"})
        this.displayTween = TweenLite.to(this.displayRef , this.state.slow ? 2.2 : 1.2, {rotationX: 2*this.state.y, rotationY: -1.5*this.state.x, transformPerspective: 600, transformOrigin: "30% 50%"})
    }
updatePosition = (e)=> {
    //Width & height of the board-container at client
    //While using callback refs we get the current value
    const width = this.boardRef.clientWidth; 
    const height = this.boardRef.clientHeight;
    //values for tilt-effect: -22,5 to +22,5 deg
    const xO = ((e.nativeEvent.offsetX/width)-0.5)*45;
    const yO = ((e.nativeEvent.offsetY/height)-0.5)*-45;
    this.setState( {x: xO, y: yO, slow: false})
}
resetPosition = ()=> {
    setTimeout( ()=> {
        this.setState({x: 0, y: 0, slow: true})}, 600
    )
}   
    
    render() {
      return (
        <div className="board-container"

        onMouseMove={this.updatePosition}
        onMouseLeave={this.resetPosition}
        >
        <div className = "icosahedron" ref= {svg => this.objectRef = svg}>
                <Icosahedron width="100%"/>
            </div>
        <div className ="display" ref= {svg => this.displayRef = svg} >
          <h2 onMouseMove={event => event.stopPropagation()}>utilizing <a id="gsap-link" href="https://greensock.com/" >greensock</a>, <a id="emotion-link" href="https://emotion.sh/">emotion</a> and <br/> <a id="rtg-link" href="https://reactcommunity.org/react-transition-group/">react-transition-group</a></h2>
        </div>
          <div className="backplate"
            ref={div => this.boardRef = div}
          >
          </div>
        </div>
      );
    }
  }
  
  export default Board;