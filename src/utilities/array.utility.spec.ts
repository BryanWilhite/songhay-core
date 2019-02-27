import { ArrayUtility } from './array.utility';

test('should find duplicate numbers', () => {
    const data = [1, 1, 2, 3, 4, 5.01, 55, 5, 7, 7, 7];
    const duplicates = ArrayUtility.findDuplicates(data);
    expect(duplicates).toBeDefined();
    expect(duplicates).toBeTruthy();
    expect(duplicates.length).toEqual(2);
});

test('should find duplicate text', () => {
    const data = ['three', 'three', 'four', '3.0', '3', '3', 'one'];
    const duplicates = ArrayUtility.findDuplicates(data);
    expect(duplicates).toBeDefined();
    expect(duplicates).toBeTruthy();
    expect(duplicates.length).toEqual(2);
});

test('should get empty array', () => {
    expect(ArrayUtility.isNotTruthyOrIsEmpty([])).toEqual(true);
});

test('should not get empty array', () => {
    expect(ArrayUtility.isNotTruthyOrIsEmpty([1])).toEqual(false);
});

test('should get undefined array', () => {
    const dummy: any = {};
    expect(ArrayUtility.isNotTruthyOrIsEmpty(dummy.anything)).toEqual(true);
});

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
