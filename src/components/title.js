import React, {Component} from 'react';
import styled from '@emotion/styled';

const Mask = styled.div (
    {position: "absolute",
    top: "0",
    left: "0",
    color: "rgb(240, 191, 150)",
    width: "100%",
    height: "100%"
    
    },
    
    props => ({
        clipPath: "polygon(0 0, "+(props.xO-20)*1.4+"% 0, "+(props.yO-20)*1.4+"% 100% ,0% 100%)",
        transition: (props.slow ? "8s" : "0.6s")+" cubic-bezier(.14,.84,.57,1)"
})    
)

class Title extends Component {

    constructor(props) {
        super(props);
        this.conRef = React.createRef();
        this.state = {
            x: 0,
            y: 0,
            slow: false
        }
    }  

updatePosition = (e)=> {
    //Width & height of the Title Container for the client
    //While using createRef() we need the ".current" on our ref
    const width = this.conRef.current.clientWidth; 
    const height = this.conRef.current.clientHeight;
    const xO = (e.nativeEvent.offsetX/width)*100;
    const yO = (e.nativeEvent.offsetY/height)*100;
    this.setState( {x: xO, y: yO, slow: false})
}
resetPosition = ()=> {
    setTimeout( ()=> {
        this.setState({x: 0, y: 0, slow: true})}, 600
    )
}   
    
    render() {
        const {text} = this.props;
        const {x, y, slow} = this.state;
      return (
        <div 
          className="titleContainer"
          ref={this.conRef}
          onMouseMove={this.updatePosition}
          onMouseLeave={this.resetPosition}
          >
            <div className="title-bg">
                <h1>{text}</h1> 
            </div>
            <Mask xO={x} yO={y} slow={slow}>
                <h1>{text}</h1> 
            </Mask>

        </div>
      );
    }
  }
  
  export default Title;