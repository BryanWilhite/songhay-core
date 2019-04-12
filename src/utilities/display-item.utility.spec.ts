import { MenuDisplayItemModel } from '../models/menu-display-item.model';

import { DisplayItemUtility } from './display-item.utility';

test('should group flat set for display [empty or null Selectable map pairs]', () => {

    const mapForG1 = new Map<string, any>();
    const mapForG2: Map<string, any> = null;
    const mapForG3 = new Map<string, any>();

    const flat: MenuDisplayItemModel[] = [
        { id: 1, displayText: 'item one [G1]', groupId: 'group-one', groupDisplayText: 'Group One', map: mapForG1 },
        { id: 2, displayText: 'item two [G1]', groupId: 'group-one', groupDisplayText: 'Group One', map: mapForG1 },
        { id: 3, displayText: 'item three [G1]', groupId: 'group-one', groupDisplayText: 'Group One', map: mapForG2 },
        { id: 4, displayText: 'item four [G2]', groupId: 'group-two', groupDisplayText: 'Group Two', map: mapForG2 },
        { id: 5, displayText: 'item five [G2]', groupId: 'group-two', groupDisplayText: 'Group Two', map: mapForG2 },
        { id: 6, displayText: 'item six [G2]', groupId: 'group-two', groupDisplayText: 'Group Two', map: mapForG2 },
        { id: 7, displayText: 'item seven [G3]', groupId: 'group-three', groupDisplayText: 'Group Three', map: mapForG3 }
    ];

    const grouped = DisplayItemUtility.displayInGroups(flat);
    expect(grouped).not.toBeNull();
    console.log({ grouped });
});

test('should group flat set for display [Selectable map pairs]', () => {

    const mapForG1 = new Map<string, any>([['group-one', 'Group One']]);
    const mapForG2 = new Map<string, any>([['group-two', 'Group Two']]);
    const mapForG3 = new Map<string, any>([['group-three', 'Group Three']]);

    const flat: MenuDisplayItemModel[] = [
        { id: 1, displayText: 'item one [G1]', map: mapForG1 },
        { id: 2, displayText: 'item two [G1]', map: mapForG1 },
        { id: 3, displayText: 'item three [G1]', map: mapForG2 },
        { id: 4, displayText: 'item four [G2]', map: mapForG2 },
        { id: 5, displayText: 'item five [G2]', map: mapForG2 },
        { id: 6, displayText: 'item six [G2]', map: mapForG2 },
        { id: 7, displayText: 'item seven [G3]', map: mapForG3 }
    ];

    const grouped = DisplayItemUtility.displayInGroups(flat);
    expect(grouped).not.toBeNull();
    console.log({ grouped });

    const key = 'group-three';
    expect(grouped.find(i => i.id === key)).toBeTruthy();
    expect(grouped.find(i => i.id === key).childItems).toHaveLength(1);
});

test('should group flat set for display [Selectable map pairs with prefix, sorted ascending]', () => {

    const mapForG1 = new Map<string, any>([['topic-object', {}], ['group-one', 'Group One']]);
    const mapForG2 = new Map<string, any>([['group-two', 'Group Two']]);
    const mapForG3 = new Map<string, any>([['group-three', 'Group Three'], ['group-year-month', '2019/04']]);

    const flat: MenuDisplayItemModel[] = [
        { id: 1, displayText: 'item one [G1]', map: mapForG1 },
        { id: 2, displayText: 'item two [G1]', map: mapForG1 },
        { id: 3, displayText: 'item three [G1]', map: mapForG2 },
        { id: 4, displayText: 'item four [G2]', map: mapForG2 },
        { id: 5, displayText: 'item five [G2]', map: mapForG2 },
        { id: 6, displayText: 'item six [G2]', map: mapForG2 },
        { id: 7, displayText: 'item seven [G3]', map: mapForG3 }
    ];

    const grouped = DisplayItemUtility.displayInGroups(flat, 'group-', true);
    expect(grouped).not.toBeNull();
    console.log({ grouped });

    const key = 'group-three';
    expect(grouped.find(i => i.id === key)).toBeTruthy();
    expect(grouped.find(i => i.id === key).childItems).toHaveLength(1);
});