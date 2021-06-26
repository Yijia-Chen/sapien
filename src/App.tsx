import React from 'react';
import './App.css';
import { MenuButton, ModePanel, UtilityPanel, StylePanel, Menu, Outliner, Mindmap } from './components';
import { FixMeLater, MapState, Props } from './types';
import { parseMarkdownBulletsAsJson } from './utils';
// import marked from 'marked';

export default class App extends React.Component {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      mapState: new MapState(),
      history: Array<MapState>()
    };
  }

  updateTitle(title: string) {
    const state = (this.state as FixMeLater);
    this.setState({ history: state.history.concat([ state.mapState ]), mapState: { ...state.mapState, title } });
  }

  updateBody(body: string) {
    const state = (this.state as FixMeLater);
    this.setState({ history: state.history.concat([ state.mapState ]), mapState: { 
      ...state.mapState, body, items: parseMarkdownBulletsAsJson(body) 
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
          title={(this.state as FixMeLater).mapState.title}
          body={JSON.stringify((this.state as FixMeLater).mapState.items)}
        />
      </div>
    );
  }
}
