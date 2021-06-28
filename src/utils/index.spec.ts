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
    expect(actual).toStrictEqual(expected);
  });

  it('test 2', function() {
    const text = '- Compiler/Languages\n    - Elm\n    - Svelle';

    const one = new MapItem('Compiler/Languages', 0);
    const oneOne = new MapItem('Elm', 1);
    const oneTwo = new MapItem('Svelle', 1);
    one.grow(oneOne);
    one.grow(oneTwo);

    const expected = [one];
    const actual = parseMarkdownBulletsAsJson(text);
    expect(actual).toStrictEqual(expected);
  })

  // FIXME: need to adjust for different starting points
  // it('test 3', function() {
  //   const text = '- a\n    - b\n      - c\n    - d'

  //   const a = new MapItem('a', 0);
  //   const b = new MapItem('b', 1);
  //   const c = new MapItem('c', 2);
  //   const d = new MapItem('d', 1);
  //   a.grow(b);
  //   b.grow(c);
  //   a.grow(d);

  //   const expected = [a];
  //   const actual = parseMarkdownBulletsAsJson(text);
  //   console.log(JSON.stringify(actual));
  //   expect(actual).toStrictEqual(expected);
  // })
});