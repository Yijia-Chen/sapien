import { ChangeEventHandler, MouseEventHandler } from "react"
import { parseMarkdownBulletsAsJson } from "../utils";

export interface Props {
  onClick?: MouseEventHandler,
  onTitleChange?: ChangeEventHandler,
  onBodyChange?: ChangeEventHandler,
  onCreateNewClick?: MouseEventHandler,
  icon?: string,
  value?: string,
  title?: string,
  body?: string,
  items?: Array<MapItem>,
  documents?: Array<Document>,
  currentDocument?: Document
}

export interface State {
  documents: Array<Document>;
  currentDocument: Document;
}

export class Document {
  name: string;
  mapState = new MapState();
  history: Array<MapState> = [];

  constructor() {
    this.name = this.mapState.title;
  }

  updateTitle(title: string) {
    this.name = title;
    this.mapState = { ...this.mapState, title };
    this.history.push(this.mapState);
    return this;
  }

  updateBody(body: string) {
    this.mapState = { ...this.mapState, body, items: parseMarkdownBulletsAsJson(body) };
    this.history.push(this.mapState);
    return this;
  }
}

export class MapState {
  title: string;
  body: string;
  items: Array<MapItem>;

  constructor(title?: string, body?: string, items?: Array<MapItem>) {
    this.title = title ?? 'Central Topic';
    this.body = body ?? '';
    this.items = items ?? [];
  }
}

export type FixMeLater = any;

export class MapItem {
  text: string;
  layer: number;
  children: Array<MapItem> = [];

  constructor(text: string, layer: number) {
    this.text = text;
    this.layer = layer;
  }

  grow(child: MapItem): void {
    this.children.push(child);
  }
}