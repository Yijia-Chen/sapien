import { MapItem } from '../types';
import { parseMarkdownBulletsAsJson } from '../utils';

describe('parse', function() {
  it('test 1', function() {
    const text = 'ignored text\n  more ignored text\n- 1\n    - 1.1\n  - 1.2\n    - 1.2.1 \nand more\n- 2\n  - 2.1\n   -not item';
    
    const one = new MapItem('1', 0);
    const oneOne = new MapItem('1.1', 1);
    one.grow(oneOne);
    const oneTwo = new MapItem('1.2', 1);
    one.grow(oneTwo);
    const oneTwoOne = new MapItem('1.2.1  and more', 2);
    oneTwo.grow(oneTwoOne);
    const two = new MapItem('2', 0);
    const twoOne = new MapItem('2.1    -not item', 1);
    two.grow(twoOne);

    const expected = [one, two];
    const actual = parseMarkdownBulletsAsJson(text);
    console.log(actual);
    expect(actual).toStrictEqual(expected);
  });
});