import React from 'react';
import './App.css';

function MenuButton(props) {
  return (
    <button className='menu-button' onClick={props.onClick}>
      <i className={props.icon} style={{fontSize:'20px', marginTop:'2.5px', color:'#ffffff'}}></i>
    </button>);
}

function ModeButton(props) {
  return (
    <button className='mode-button' onClick={props.onClick}>
      {props.text}
    </button>
  )
}

function ModePanel(props) {
  return (
    <div className='mode-panel'>
      <ModeButton text='Mind Map' />
      <ModeButton text='Outliner' />
      <ModeButton text='Both' />
    </div>
  );
}

function UtilityPanel(props) {
  return (
    <p className='utility-panel'>
      <StyleButton icon='fas fa-arrow-down' value='Topic' />
      <StyleButton icon='fas fa-arrow-right' value='Subtopic' />
      <StyleButton icon='fas fa-project-diagram' value='Relationship' />
      <StyleButton icon='far fa-square' value='Boundary' />
      <StyleButton icon='fas fa-plus' value='Insert' />
    </p> 
  );
}

function StylePanel(props) {
  return (
    <div className='style-panel'>
      <StyleButton icon='fas fa-palette' value='Style' />
    </div>
  );
}

function StyleButton(props) {
  return (
    <button className='utility-button'>
      <i className={props.icon} style={{fontSize:'16px', marginTop:'10px', color:'#ffffff'}}></i>
      <p className='utility-button-text'>{props.value}</p>
    </button>
  );
}

class Menu extends React.Component {
  render() {
    return (
      <div className='App-menu'>

      </div>
    );
  }
}

class Outliner extends React.Component {
  render() {
    return (
      <div className='App-outliner'>
        <textarea className='outliner-title'></textarea>
        <textarea 
          className='outliner-body'
          onChange={this.props.function}
        ></textarea>
      </div>
    );
  }
}

class Mindmap extends React.Component {
  render() {
    return (
      <div className='App-mindmap'>
        
      </div>
    );
  }
}

export default class App extends React.Component {
  update(content) {
    this.setState({ content });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <MenuButton icon='fas fa-bars' />
          <p className='text-logo'>Sapien</p>
          <ModePanel />
          <UtilityPanel />
          <StylePanel />
        </header>
        <Menu />
        <Outliner function={(e) => this.update(e.target.value)} />
        <div className='separator'></div>
        <Mindmap />
      </div>
    );
  }
}
