import { MenuDisplayItemModel } from '../models/menu-display-item.model';
import { ReducedGroup } from '../models/reduced-group';

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

const flat: MenuDisplayItemModel[] = [
    { id: 1, displayText: 'item one [G1]', groupId: 'group-one', groupDisplayText: 'Group One' },
    { id: 2, displayText: 'item two [G1]', groupId: 'group-one', groupDisplayText: 'Group One' },
    { id: 3, displayText: 'item three [G1]', groupId: 'group-one', groupDisplayText: 'Group One' },
    { id: 4, displayText: 'item four [G2]', groupId: 'group-two', groupDisplayText: 'Group Two' },
    { id: 5, displayText: 'item five [G2]', groupId: 'group-two', groupDisplayText: 'Group Two' },
    { id: 6, displayText: 'item six [G2]', groupId: 'group-two', groupDisplayText: 'Group Two' },
    { id: 7, displayText: 'item seven [G3]', groupId: 'group-three', groupDisplayText: 'Group Three' }
];

it('should group flat set', () => {
    const groups: ReducedGroup[] = ArrayUtility.groupBy(flat, (i: MenuDisplayItemModel) => i.groupId);
    expect(groups).not.toBeNull();
    console.log({groups});

    const groupId = 'group-three';
    const group = groups.find(i => i.key === groupId);
    expect(group?.values).toHaveLength(1);

    const first = group?.values[0] as MenuDisplayItemModel;
    expect(first).not.toBeNull();
    console.log({first});
    expect(first.groupId).toEqual(groupId);
});
