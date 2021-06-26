import React from "react";
import { MapItem, Props, State } from "../types";

const ITEM_SCALE_FACTOR = 0.93;

export class Mindmap extends React.Component<Props, State> {  
  renderSection(item: MapItem, branchIndex: number): JSX.Element {
    const sections = item.children.map((i) => this.renderSection(i, branchIndex));
    const curveColor = assignBranchColor(branchIndex);

    return (
      <div className='mindmap-section' style={{transform: `scale(${scaleFactor(item.layer)})` }}>
        {/* a curve that connects the section to its parent */}
        <svg width='100' height='50' style={{ marginLeft: '-24px', marginRight: '5px' }}>
          <path d='M0 50 A 1600 120 0 0 1 100 25' stroke={curveColor} stroke-width='5' fill='#2e2e2e' />
        </svg>
        <p className='mindmap-item'>{item.text}</p>
        <div className='mindmap-children'>
          {sections}
        </div>
      </div>
    );
  }

  render() {
    const items = this.props.items!;
    const sections = items.map((item, k) => this.renderSection(item, k))

    return (
      <div className='App-mindmap'>
        <div className='mindmap-section'>
          <div className='mindmap-title'>
            <p>{this.props.title!}</p>
          </div>
          <div className='mindmap-children'>
            {sections}
          </div>
        </div>
      </div>
    );
  }
}

function scaleFactor(layer: number) {
  return Math.pow(ITEM_SCALE_FACTOR, layer+1);
}

function assignBranchColor(branchIndex: number) {
  const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];
  return colors[branchIndex%7];
}