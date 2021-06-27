import { MapItem } from "../types";

/**
 * Converts a block of text in markdown bullet point format to JSON format.
 * Returns the top layer items as all items are descendant of them.
 */
export function parseMarkdownBulletsAsJson(
  text: string,
): Array<MapItem> {
  const lines = text.split('\n');
  const depthItemMap: Record<number, Array<MapItem>> = {};
  let lastItem = new MapItem('Please start your map with a bullet point', 0);
  
  lines.map((line) => {
    const bulletIndex = line.search('-');

    if (bulletIndex === -1 || line.length === bulletIndex + 1 || line[bulletIndex+1] !== ' ') {
      // not an item, in which case append it to children of last item
      lastItem.text += ' ' + line;

    } else {
      let layer = Math.floor(bulletIndex / 2);
      if (layer > lastItem.layer + 1) layer = lastItem.layer + 1;

      const text = line.substring(bulletIndex + 2);
      const item = new MapItem(text, layer);
      
      if (layer > 0) {
        // grow current item to the last item seen whose layer is one above current
        depthItemMap[layer-1][depthItemMap[layer-1].length-1].grow(item);
      }

      if (!(layer in depthItemMap)) depthItemMap[layer] = [];
      depthItemMap[layer].push(item);
      lastItem = item;
    }
  });

  return depthItemMap[0] ?? [];
}

export function logWarning(msg: string): void {
  console.log(`You are not doing ${msg} right. Please correct.`);
}

export function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}