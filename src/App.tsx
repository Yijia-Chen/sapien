import React from 'react';
import './App.css';
import { MenuButton, ModePanel, UtilityPanel, StylePanel, Menu, Outliner, Mindmap } from './components';
import { FixMeLater, MapState, Props, State } from './types';
import { parseMarkdownBulletsAsJson } from './utils';

export default class App extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      mapState: new MapState(),
      history: Array<MapState>()
    };
  }

  updateTitle(title: string) {
    this.setState({ history: this.state.history.concat([ this.state.mapState ]), mapState: { ...this.state.mapState, title } });
  }

  updateBody(body: string) {
    this.setState({ history: this.state.history.concat([ this.state.mapState ]), mapState: { 
      ...this.state.mapState, body, items: parseMarkdownBulletsAsJson(body) 
    } });
  }

  render() {
    console.log('re-rendered my baby!');
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
        <Outliner 
          onTitleChange={(e) => this.updateTitle((e.target as FixMeLater).value!)}
          onBodyChange={(e) => this.updateBody((e.target as FixMeLater).value!)}
        />
        <div id='separator'></div>
        <Mindmap 
          title={this.state.mapState.title}
          items={this.state.mapState.items}
        />
      </div>
    );
  }
}
