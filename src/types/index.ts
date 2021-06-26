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

export interface MapItem {
  text: string,
  layer: number,
  children: Array<MapItem>,
}