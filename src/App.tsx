import React from 'react';
import './App.css';
import { Header, Menu, Outliner, Mindmap } from './components';
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
    return (
      <div className='App'>
        <Header />
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
