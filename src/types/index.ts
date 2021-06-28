import { ChangeEventHandler, MouseEventHandler } from "react";
import { getLargestOrder, parseMarkdownBulletsAsJson, uuid } from "../utils";

export const ORDER_STEP = 65536;

export interface HeaderProps {
  onMenuSwitch: MouseEventHandler;
  onModeSwitch: MouseEventHandler;
  onTopicClick: MouseEventHandler;
  onSubtopicClick: MouseEventHandler;
  onRelationshipClick: MouseEventHandler;
  onBoundaryClick: MouseEventHandler;
  OnInsertClick: MouseEventHandler;
  onStyleSwitch: MouseEventHandler;
  isMenuHidden: boolean;
}

export interface ButtonProps {
  onClick: MouseEventHandler;
  icon?: string;
  value?: string;
}

export interface MenuProps {
  isMenuHidden: boolean;
  documents: Array<Document>;
  currentDocument: Document;
  onCreateNewClick: MouseEventHandler;
  onDocumentClick: MouseEventHandler;
  onArchiveClick: MouseEventHandler;
}
export interface OutlinerProps {
  onTitleChange: ChangeEventHandler;
  onBodyChange: ChangeEventHandler;
  mapState: MapState;
}

export interface MapProps {
  title: string;
  items: Array<MapItem>;
}

export interface State {
  isMenuHidden: boolean;
  mode: Mode;
  documents: Array<Document>;
  currentDocument: Document;
}

export enum Mode {
  MINDMAP = 'Mind Map',
  OUTLINER = 'Outliner',
  BOTH = 'Both'
}

export class Document {
  id: string;
  name: string;
  order: number;
  isArchived = false;
  mapState = new MapState();
  history: Array<MapState> = [];

  constructor(documents?: Array<Document>) {
    this.id = uuid();
    this.name = this.mapState.title;
    this.order = documents ? getLargestOrder(documents) + ORDER_STEP : 0;
  }

  updateTitle(title: string): this {
    this.name = title;
    this.mapState = { ...this.mapState, title };
    this.history.push(this.mapState);
    return this;
  }

  updateBody(body: string): this {
    this.mapState = { ...this.mapState, body, items: parseMarkdownBulletsAsJson(body) };
    this.history.push(this.mapState);
    return this;
  }

  archive(): this {
    this.isArchived = true;
    return this;
  }

  restore(): this {
    this.isArchived = false;
    return this;
  }
}

export class MapState {
  title: string;
  body: string;
  items: Array<MapItem>;

  constructor(title?: string, body?: string, items?: Array<MapItem>) {
    this.title = title ?? 'Central Topic';
    this.body = body ?? '- first point';
    this.items = items ?? parseMarkdownBulletsAsJson(this.body);
  }
}

export class MapItem {
  text: string;
  layer: number;
  children: Array<MapItem> = [];

  constructor(text: string, layer: number) {
    this.text = text;
    this.layer = layer;
  }

  grow(child: MapItem): this {
    this.children.push(child);
    return this;
  }
}

export const UNIMPLEMENTED_CALLBACK = () => console.log('not implemented');
export type FixMeLater = any;