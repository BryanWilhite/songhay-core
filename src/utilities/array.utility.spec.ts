import { ArrayUtility } from './array.utility';

test('should sort numeric items', () => {
    let items = [{ item: 34 }, { item: 2 }, { item: 88 }, { item: -9 }];
    items = ArrayUtility.sortItems(items, 'item', true);
    const numbers = items.map(i => i.item);
    expect(numbers).toEqual(numbers.sort());
});

test('should sort text items', () => {
    let items = [
        { item: 'ok' },
        { item: 'yes' },
        { item: 'affirmative' },
        { item: 'right' }
    ];
    items = ArrayUtility.sortItems(items, 'item');
    const firsts = items.map(i => i.item.substring(0, 1));
    expect(firsts).toEqual(firsts.sort());
});
