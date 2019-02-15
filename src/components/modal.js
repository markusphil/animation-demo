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
              <h2>Hover-Event Animation Demo</h2>  
            </div>
            <button className="close-btn" onClick={this.props.close}>
                <CloseIcon width="20px"/>
            </button> 
            <div className="modal-container">
              <div className="modal-content">
                <p>This demo showcases some experiments with animations I've done over the past few weeks. It uses different technologies to create interactive animations.
                  Please note that it is not optimized for performance and stability and does not work as intended on touchscreen devices.</p>
                <h3>Using React as Framework</h3>
                <p>The demo uses React as state-of-the-art framework to create a component based user interface. It is deployed via github and <a id="nlfy-link" href="https://www.netlify.com/">netlify</a></p>
              </div>
              <div className="modal-content">
                <h3>Animated Clip-Path Hover-Effect</h3>
                <p>The first animation is created with a styled component using <a id="emotion-link" href="https://emotion.sh/">emotion</a>. 
                While moving the cursor over the text-container, the mouse's position gets updated and stored in the component's state, which is then used to rerender the component's CSS clip-path value.
                When leaving the container, the clip-path is animated slowly back to it's inital value.
                </p>
              </div>
              <div className="modal-content">
                <h3>Animated 3D-Tilt Hover-Effect</h3>
                <p>The second animation also uses the mouse's position. 
                  But instead of using a styled component, the animation is generated with <a id="gsap-link" href="https://greensock.com/" >GSAP's</a> TweenLite tool.
                  Mouse movement on the container again updates the state, which triggers a function that overrides the animation's target transformation.
                  While the mouse is moved over the text, the position won't be updated.
                </p>
              </div>
              <div className="modal-content">
                <h3>GSAP for simple animation</h3>
                <p> Greensocks TweenLite and TimelineLite tools are used for animating the infobox, the button and the modal. For the infobox I additionaly used the Transition component of <a id="rtg-link" href="https://reactcommunity.org/react-transition-group/">react-transition-group</a>, which handles the entrance and exit of components to the DOM. 
                </p>
                <p>Background photo by <a href="https://www.pexels.com/photo/palm-tree-926641/">Hedaetul Islam</a> </p>
              </div>
            </div>
            <div className="modal-footer"> created by Markus Philipp - Feb 2019 - <a href="https://github.com/markusphil/animation-demo">github</a></div>
        </div>
    </div>
    )}
}