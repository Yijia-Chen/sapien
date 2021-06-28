import React from 'react';
import './App.css';
import { Header, Menu, Outliner, Mindmap } from './components';
import { Document, FixMeLater, State } from './types';

export default class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    const document = new Document();
    this.state = {
      currentDocument: document,
      documents: [document]
    };
  }

  updateTitle(title: string) {
    this.setState({ ...this.state, currentDocument: this.state.currentDocument.updateTitle(title) });
  }

  updateBody(body: string) {
    this.setState({ ...this.state, currentDocument: this.state.currentDocument.updateBody(body) });
  }

  createNewDocument() {
    const document = new Document(this.state.documents);
    this.setState({ ...this.state, documents: this.state.documents.concat(document) });
  }

  switchDocument(id: string) {
    const idDocumentMap = new Map(this.state.documents.map((doc) => [doc.id, doc]));
    this.setState({ ...this.state, currentDocument: idDocumentMap.get(id)! })
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Menu
          onCreateNewClick={() => this.createNewDocument()}
          onDocumentClick={(e) => this.switchDocument((e.target as FixMeLater).value!)}
          documents={this.state.documents}
          currentDocument={this.state.currentDocument}
        />
        <Outliner 
          onTitleChange={(e) => this.updateTitle((e.target as FixMeLater).value!)}
          onBodyChange={(e) => this.updateBody((e.target as FixMeLater).value!)}
        />
        <div id='separator'></div>
        <Mindmap 
          title={this.state.currentDocument.mapState.title}
          items={this.state.currentDocument.mapState.items}
        />
      </div>
    );
  }
}
