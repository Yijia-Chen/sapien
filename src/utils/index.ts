import { MapItem } from "../types";

/**
 * Converts a block of text in markdown bullet point format to JSON format.
 */
export function parseMarkdownBulletsAsJson(
  text: string,
): Record<number, Array<MapItem>> {
  const lines = text.split('\n');
  const depthItemMap: Record<number, Array<MapItem>> = {};
  let lastItem: MapItem = { text: 'Please start your map with a bullet point', layer: 0, children: [] }
  
  lines.map((line) => {
    const bulletIndex = line.search('-');

    if (bulletIndex === -1) {
      // not an item, in which case append it to children of last item
      if (!Object.keys(depthItemMap).length) logWarning('bullets');
      lastItem.text += ' ' + line;

    } else {
      let layer = Math.floor(bulletIndex / 2);
      if (layer > lastItem.layer + 1) layer = lastItem.layer + 1;

      const item: MapItem = { text: line, layer, children: [] };
      
      if (layer > 0) {
        // append current item to children of the last item seen whose layer is one above current
        depthItemMap[layer-1][depthItemMap[layer-1].length-1].children.push(item);
      }

      if (!(layer in depthItemMap)) depthItemMap[layer] = [];
      depthItemMap[layer].push(item);
      lastItem = item;
    }
  });

  return depthItemMap;
}

export function logWarning(msg: string): void {
  console.log(`You are not doing ${msg} right. Please correct.`);
}