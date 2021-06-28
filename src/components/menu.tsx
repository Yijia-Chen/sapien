import React from "react";
import { Document, MenuProps } from "../types";

export class Menu extends React.Component<MenuProps, any> {
  renderSection(): Array<JSX.Element> {
    let currentId = this.props.currentDocument.id; 
    const getStyle = (doc: Document) => currentId === doc.id ? 'menu-document-current' : 'menu-document';

    const visibleDocuments = this.props.documents.filter((doc) => !doc.isArchived);
    const idVisibleDocumentMap = new Map(visibleDocuments.map((viDoc) => [viDoc.id, viDoc]));
    if (!idVisibleDocumentMap.get(currentId)) currentId = visibleDocuments[0].id;

    return visibleDocuments.flatMap((doc) => ([
      <button key={doc.id} id={doc.id} className={getStyle(doc)} onClick={this.props.onDocumentClick}>
        {doc.name}
      </button>,
      <button key={doc.id + '-del'} id={doc.id} className={'amazing'} onClick={this.props.onArchiveClick}>X</button>
    ]));
  }

  render(): JSX.Element | null {
    if (!this.props.isMenuHidden) {
      return (
        <div className='App-menu'>
          <div className='menu-utility-panel'>
            <p id='menu-header'>WORKSPACE</p>
            <button className='menu-new' onClick={this.props.onCreateNewClick}>
              <i className='far fa-plus-square' style={{ color: '#8b8b8b' }}></i>
            </button>
          </div>
          {this.renderSection()}
        </div>
      );
    } else {
      return null;
    }
  }
}