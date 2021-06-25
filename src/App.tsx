import React from 'react';
import './App.css';
import { MenuButton, ModePanel, UtilityPanel, StylePanel, Menu, Outliner, Mindmap } from './components';
import { FixMeLater, Props, State } from './types';
let marked = require('marked');

export default class App extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: 'Mind Map Title',
      content: '',
    };
  }

  updateTitle(title: string) {
    this.setState({ title });
  }

  updateBody(content: string) {
    this.setState({ content });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <MenuButton icon='fas fa-bars' />
          <p id='text-logo'>Sapien</p>
          <ModePanel />
          <UtilityPanel />
          <StylePanel />
        </header>
        <Menu />
        <Outliner onChange={(e) => this.updateBody((e.target as FixMeLater).value)} />
        <div id='separator'></div>
        <Mindmap dangerouslySetInnerHTML={marked((this.state as State).content)} />
      </div>
    );
  }
}
