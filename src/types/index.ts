import { ChangeEventHandler, MouseEventHandler } from "react"

export type Props = {
  onClick?: MouseEventHandler,
  onChange?: ChangeEventHandler,
  dangerouslySetInnerHTML?: string,
  icon?: string,
  value?: string,
}

export type State = {
  title: string,
  content: string,
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