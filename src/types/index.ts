import { ChangeEventHandler, MouseEventHandler } from "react"

export interface Props {
  onClick?: MouseEventHandler,
  onTitleChange?: ChangeEventHandler,
  onBodyChange?: ChangeEventHandler,
  icon?: string,
  value?: string,
  title?: string,
  body?: string,
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