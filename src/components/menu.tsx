import React from "react";
import { Document, MenuProps } from "../types";

export class Menu extends React.Component<MenuProps, any> {
  renderSection(documents: Array<Document>): Array<JSX.Element> {
    return documents.map((d) => 
      <button className='menu-doc' onClick={this.props.onDocumentClick}>{d.name}</button>);
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