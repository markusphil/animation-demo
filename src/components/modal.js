import React, { Component } from 'react';
import { TimelineLite } from 'gsap';
import {CloseIcon} from '../graphics/close'


export class Modal extends Component {

    constructor(props){
        super(props);
        this.modalWrap = null;
        this.modalDialog = null;
		this.modalTween = new TimelineLite({ paused: true });
    }

    componentDidMount() {
		this.modalTween
			.to(this.modalWrap, 1, { autoAlpha: 1 })
			.from(this.modalDialog, 1, { y: -100, autoAlpha: 0 },0)
            .reversed(true)
            .paused(false);
    }
    componentDidUpdate(){
        this.modalTween.reversed(!this.props.visible);
        if ( this.props.visible ) {
			window.addEventListener('keydown', this.keyDownHandler);
		} else {
			window.removeEventListener('keydown', this.keyDownHandler);
		}
    }

    keyDownHandler = event => {
       //close modal when user presses esc(keycode 27) 
        if (event.keyCode === 27) this.props.close();
    }

render(){
    return( 
    <div className="modal-wrap"
      ref={div => this.modalWrap = div}
      onClick={this.props.close}> 
        <div className="modal-box"
          ref={div => this.modalDialog = div}
          //onClick function to prevent the parents event from beeing triggered
          onClick={event => event.stopPropagation()}>
            <div className="modal-head">
              <h2>A simple animation Demo</h2>  
            </div>
            <button className="close-btn" onClick={this.props.close}>
                <CloseIcon width="20px"/>
            </button> 
            <div className="modal-container">
              <div className="modal-content">
                <p>This demo showcases some experiments with animations I've done the past weeks. It uses different techniques to create interactive animations.  Please note that it is not optimized for performance and stability and doesn't support touch events.</p>
                <h3>Using React as Framework</h3>
                <p>The demo uses React as "state of the art" framework to create a component based user interface and is deployed via github and <a id="nlfy-link" href="https://www.netlify.com/">netlify</a></p>
              </div>
              <div className="modal-content">
                <h3>Animated Clip-Path Hover-Effect</h3>
                <p>This animation is created with a styled component using <a id="emotion-link" href="https://emotion.sh/">emotion</a>. 
                While moving the mouse over the text-container, the mouse's position gets updated and stored in the components state which is then used to rerender the components clip-path css value. 
                </p>
              </div>
              <div className="modal-content">
                <h3>Animated 3D-Tilt Hover-Effect</h3>
                <p>The second animation also uses the mouse position. But instead of using a styled component, the animation is generated with <a id="gsap-link" href="https://greensock.com/" >GSAP's</a> TweenLite tool. Mouse movement on the container updates the state, which triggers a function that overrides the animations traget transformation. 
                </p>
              </div>
              <div className="modal-content">
                <h3>GSAP for simple animation</h3>
                <p> Greensocks TweenLite and TimelineLite tools are also used for animating the infobox, button and modal. For the infobox I additionaly used the transition tool of <a id="rtg-link" href="https://reactcommunity.org/react-transition-group/">react-transition-group</a> which handles the entrance and exit of components at the DOM. 
                </p>
              </div>
            </div>
            <div className="modal-footer"> created by Markus Philipp - Feb 2019 - <a href="https://github.com/markusphil/animation-demo">github</a></div>
        </div>
    </div>
    )}
}