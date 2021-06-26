import React from "react";
import { MapItem, Props, State } from "../types";

export class Mindmap extends React.Component<Props, State> {  
  renderSection(item: MapItem): JSX.Element {
    const sections = item.children.map((i) => this.renderSection(i));

    return (
      <div className='mindmap' style={{scale: scaleFactor(item.layer)}}>
        <p className='mindmap-item'>{item.text}</p>
        <div className='mindmap-children'>
          {sections}
        </div>
      </div>
    );
  }

  render() {
    const items = this.props.items!;
    const sections = items.map((i) => this.renderSection(i))

    return (
      <div className='App-mindmap'>
        <div className='mindmap'>
          <div className='mindmap-title'>
            <p>{this.props.title!}</p>
          </div>
          <div className='mindmap-body'>
            {sections}
          </div>
        </div>
      </div>
    );
  }
}

function scaleFactor(layer: number) {
  return Math.pow(0.8, layer);
}