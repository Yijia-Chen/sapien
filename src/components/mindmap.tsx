import React from "react";
import { MapItem, MapProps } from "../types";
import Xarrow from "react-xarrows";
import { uuid } from "../utils";

const ITEM_SCALE_FACTOR = 0.95;
const MINDMAP_SCALE_FACTOR = 0.7;

export class Mindmap extends React.Component<MapProps, any> {
  /**
   * Renders a section of the mindmap containing an item and its children (highest being the mindmap itself)
   * @param item contains the information for text, layer, and children
   * @param branchIndex specifies which primary branch the current item is on, for coloring purposes
   * @param parentId for curve connector
   * @returns JSX Element representing the section
   */
  renderSection(item: MapItem, branchIndex: number, parentId: string): JSX.Element {
    const id = uuid(); // generate unique id for drawing curve connectors
    const sections = item.children.map((i) => this.renderSection(i, branchIndex, id));
    const curveColor = assignBranchColor(branchIndex);

    return (
      <div key={id} className='mindmap-section' style={{ transform: `scale(${scaleFactor(item.layer)})` }}>
        <div className='mindmap-curve-connector'>
          <Xarrow
            start={parentId}
            end={id}
            color={curveColor}
            showHead={false}
            curveness={0.4}
            strokeWidth={6}
          ></Xarrow>
        </div>
        <div id={id} className='mindmap-item'>
          <p className='mindmap-item-text' style={{ borderBottomColor: curveColor }}>{item.text}</p>
        </div>
        <div className='mindmap-children'>
          {sections}
        </div>
      </div>
    );
  }

  render() {
    const items = this.props.items!;
    const titleId = uuid();
    const sections = items.map((item, k) => this.renderSection(item, k, titleId));

    return (
      <div className='App-mindmap'>
        <div className='mindmap-section' style={{ transform: `scale${MINDMAP_SCALE_FACTOR}` }}>
          <div id={titleId} style={{ zIndex: 1 }}>
            <div className='mindmap-title'>
              <p>{this.props.title!}</p>
            </div>
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