import React, { Component } from 'react';

import {TweenLite} from 'gsap';
import {Transition} from 'react-transition-group';
import './App.css';


import Title from './components/title';
import BoardG from './components/board';
import {Modal} from './components/modal';
import {InfoBox} from './components/infobox';


class App extends Component {

  constructor(props) {
    super(props);
    this.buttonRef = null;
    this.buttonTween = null;
    this.state = {
        showInfo: false,
        showModal: false
    }
}  

componentDidMount() {
  setTimeout( ()=> {
    this.setState({showInfo: true})}, 1200
  
)
this.buttonTween = TweenLite.from(this.buttonRef, 1.5, {y: 200, autoAlpha: 0, delay:5})
}

closeInfo = () => {
  this.setState({showInfo: false})
}
toggleModal = () => {
  this.setState(state =>({showModal: !state.showModal}))
}

  render() {
    const { showInfo } = this.state;
    return (
    <div className ="app">
      <Modal visible={this.state.showModal} close={this.toggleModal}/>
      <Transition
      timeout={1200}
      mountOnEnter
      unmountOnExit
      in={showInfo}
      addEndListener={(node, done) => {
        TweenLite.to(node, 2.5, {
          x: showInfo ? 0 : -500,
          autoAlpha: showInfo ? 1 : 0,
          onComplete: done,
        });
      }}
      >
        <InfoBox close={this.closeInfo.bind(this)} />
      </Transition>
      <div className = "wrapper">
        <Title text="animated hover-events"/>
        <BoardG/>
        <button className="modal-btn" onClick={this.toggleModal} ref={btn => this.buttonRef = btn}>about</button>
      </div> 
    </div> 
    );
  }
}

export default App;
