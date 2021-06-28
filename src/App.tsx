import React from 'react';
import './App.css';
import { Header, Menu, Outliner, Mindmap } from './components';
import { Document, FixMeLater, Mode, State, UNIMPLEMENTED_CALLBACK } from './types';

export default class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    const document = new Document();
    this.state = {
      isMenuHidden: false,
      mode: Mode.BOTH,
      currentDocument: document,
      documents: [document]
    };
  }

  switchMenuStatus(): void {
    this.setState({ ...this.state, isMenuHidden: !this.state.isMenuHidden });
  }

  switchMode(mode: Mode): void {
    this.setState({ ...this.state, mode })
  }

  createNewDocument(): void {
    const document = new Document(this.state.documents);
    this.setState({ ...this.state, documents: this.state.documents.concat(document) });
  }

  switchDocument(id: string): void {
    const idDocumentMap = new Map(this.state.documents.map((doc) => [doc.id, doc]));
    this.setState({ ...this.state, currentDocument: idDocumentMap.get(id)! })
  }

  archiveDocument(id: string): void {
    const visibleDocuments = this.state.documents.filter((doc) => !doc.isArchived);
    const idVisibleDocumentMap = new Map(visibleDocuments.map((doc) => [doc.id, doc]));

    // only allow archive if there are more than one documents left
    if (visibleDocuments.length > 1) {
      idVisibleDocumentMap.get(id)!.archive();
      this.setState({ ...this.state })
    }
  }

  updateTitle(title: string): void {
    this.setState({ ...this.state, currentDocument: this.state.currentDocument.updateTitle(title) });
  }

  updateBody(body: string): void {
    this.setState({ ...this.state, currentDocument: this.state.currentDocument.updateBody(body) });
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <Header
          isMenuHidden={this.state.isMenuHidden}
          mode={this.state.mode}
          onMenuSwitch={() => this.switchMenuStatus()}
          onModeSwitch={(e) => {
            console.log(e.target);
            console.log((e.target as FixMeLater).id);
            this.switchMode((e.target as FixMeLater).id!);
          }}
          onTopicClick={UNIMPLEMENTED_CALLBACK}
          onSubtopicClick={UNIMPLEMENTED_CALLBACK}
          onRelationshipClick={UNIMPLEMENTED_CALLBACK}
          onBoundaryClick={UNIMPLEMENTED_CALLBACK}
          OnInsertClick={UNIMPLEMENTED_CALLBACK}
          onStyleSwitch={UNIMPLEMENTED_CALLBACK}
        />
        <div className='App-body'>
          <Menu
            isMenuHidden={this.state.isMenuHidden}
            onCreateNewClick={() => this.createNewDocument()}
            onDocumentClick={(e) => this.switchDocument((e.target as FixMeLater).id!)}
            onArchiveClick={(e) => this.archiveDocument((e.target as FixMeLater).id!)}
            documents={this.state.documents}
            currentDocument={this.state.currentDocument}
          />
          <Outliner 
            mode={this.state.mode}
            onTitleChange={(e) => this.updateTitle((e.target as FixMeLater).value!)}
            onBodyChange={(e) => this.updateBody((e.target as FixMeLater).value!)}
            mapState={this.state.currentDocument.mapState}
          />
          <Separator mode={this.state.mode} />
          <Mindmap 
            mode={this.state.mode}
            title={this.state.currentDocument.mapState.title}
            items={this.state.currentDocument.mapState.items}
          />
        </div>
      </div>
    );
  }
}

function Separator(props: { mode: Mode }): JSX.Element | null {
  return props.mode === Mode.BOTH ? (<div id='separator'></div>) : null;
}
