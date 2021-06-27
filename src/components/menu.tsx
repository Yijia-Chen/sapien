import React from "react";
import { Props, State, Document } from "../types";

export class Menu extends React.Component<Props, State> {
  renderSection(documents: Array<Document>) {
    return documents.map((d) => <button className='menu-doc'>{d.name}</button>);
  }

  render() {
    return (
      <div className='App-menu'>
        <div className='menu-utility-panel'>
          <p id='menu-header'>WORKSPACE</p>
          <button className='menu-new' onClick={this.props.onCreateNewClick}>
            <i className='far fa-plus-square' style={{ color: '#8b8b8b' }}></i>
          </button>
        </div>
        {this.renderSection(this.props.documents!)}
      </div>
    );
  }
}