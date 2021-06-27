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
  const depthBulletMap: Record<number, number> = {};
  
  lines.map((line) => {
    const bulletIndex = line.search('-');

    if (bulletIndex === -1 || line.length === bulletIndex + 1 || line[bulletIndex+1] !== ' ') {
      // not an item, in which case append it to children of last item
      lastItem.text += ' ' + line;

    } else {
      let layer = Math.floor(bulletIndex / 2);

      // layer = Object.entries(depthBulletMap)
      //   .filter(([_, idx]) => idx < bulletIndex)
      //   .reduce(([k1, idx1], [k2, idx2]) => idx1 > idx2 ? [k1, idx1] : [k2, idx2])[1];

      if (layer > lastItem.layer) {
        console.log(line);
        // current item descends from last item iff bullet index of current item is at least two greater than that of last item
        layer = bulletIndex < depthBulletMap[lastItem.layer] + 2 ? lastItem.layer : lastItem.layer + 1;
      }

      const text = line.substring(bulletIndex + 2);
      const item = new MapItem(text, layer);
      
      if (layer > 0) {
        // grow current item to last item seen whose layer is one above current
        depthItemMap[layer-1][depthItemMap[layer-1].length-1].grow(item);
      }

      if (!(layer in depthItemMap)) depthItemMap[layer] = [];
      depthItemMap[layer].push(item);

      lastItem = item;
      depthBulletMap[layer] = bulletIndex;
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