import JsonItems from '../mocks/app-songhay-blog-q2-2018-items.json';
import { MenuDisplayItemModel } from '../models/menu-display-item.model';

import { DISPLAY_ITEM_GROUP_NONE, DisplayItemUtility } from './display-item.utility';
import { MapObjectUtility } from './map-object.utility';

it('should group flat set for display [empty or null Selectable map pairs]', () => {

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

it('should group flat set for display [Selectable map pairs]', () => {

    const mapForG1 = new Map<string, any>([['group-one', 'Group One']]);
    const mapForG2 = new Map<string, any>([['group-two', 'Group Two']]);
    const mapForG3 = new Map<string, any>([['group-three', 'Group Three']]);

    const flat: MenuDisplayItemModel[] = [
        { id: 8, displayText: 'item one [G1]', map: mapForG1 },
        { id: 9, displayText: 'item two [G1]', map: mapForG1 },
        { id: 10, displayText: 'item three [G1]', map: mapForG2 },
        { id: 11, displayText: 'item four [G2]', map: mapForG2 },
        { id: 12, displayText: 'item five [G2]', map: mapForG2 },
        { id: 13, displayText: 'item six [G2]', map: mapForG2 },
        { id: 14, displayText: 'item seven [G3]', map: mapForG3 }
    ];

    const grouped = DisplayItemUtility.displayInGroups(flat);
    expect(grouped).not.toBeNull();
    console.log({ grouped });

    const key = 'group-three';
    expect(grouped.find(i => i.id === key)).toBeTruthy();
    expect(grouped.find(i => i.id === key).childItems).toHaveLength(1);
});

it('should group flat set for display [Selectable map pairs with prefix, sorted ascending]', () => {

    const mapForG1 = new Map<string, any>([['topic-object', {}], ['group-one', 'Group One']]);
    const mapForG2 = new Map<string, any>([['group-two', 'Group Two']]);
    const mapForG3 = new Map<string, any>([['group-three', 'Group Three'], ['group-year-month', '2019/04']]);

    const flat: MenuDisplayItemModel[] = [
        { id: 15, displayText: 'item one [G1]', map: mapForG1 },
        { id: 16, displayText: 'item two [G1]', map: mapForG1 },
        { id: 17, displayText: 'item three [G1]', map: mapForG2 },
        { id: 18, displayText: 'item four [G2]', map: mapForG2 },
        { id: 19, displayText: 'item five [G2]', map: mapForG2 },
        { id: 20, displayText: 'item six [G2]', map: mapForG2 },
        { id: 21, displayText: 'item seven [G3]', map: mapForG3 }
    ];

    const grouped = DisplayItemUtility.displayInGroups(flat, 'group-', true);
    expect(grouped).not.toBeNull();
    console.log({ grouped });

    const key = 'group-three';
    expect(grouped.find(i => i.id === key)).toBeTruthy();
    expect(grouped.find(i => i.id === key)?.childItems).toHaveLength(1);
});

it('should get stringifiable object from display item groups', () => {

    const mapForG1 = new Map<string, any>([['topic-object', {}], ['group-one', 'Group One']]);
    const mapForG2 = new Map<string, any>([['group-two', 'Group Two']]);
    const mapForG3 = new Map<string, any>([['group-three', 'Group Three'], ['group-year-month', '2019/04']]);

    const flat: MenuDisplayItemModel[] = [
        { id: 22, displayText: 'item one [G1]', map: mapForG1 },
        { id: 23, displayText: 'item two [G1]', map: mapForG1 },
        { id: 24, displayText: 'item three [G1]', map: mapForG2 },
        { id: 25, displayText: 'item four [G2]', map: mapForG2 },
        { id: 26, displayText: 'item five [G2]', map: mapForG2 },
        { id: 27, displayText: 'item six [G2]', map: mapForG2 },
        { id: 28, displayText: 'item seven [G3]', map: mapForG3 }
    ];

    const grouped = DisplayItemUtility.displayInGroups(flat, 'group-', true);
    expect(grouped).toBeTruthy();
    expect(grouped.length).toBeGreaterThan(0);

    const stringifiable = DisplayItemUtility.getStringifiableObject(grouped[0]);
    expect(stringifiable).toBeTruthy();

    console.log({ grouped, json: JSON.stringify(stringifiable) });
});

it('should stringify object from display item groups', () => {

    const mapForG1 = new Map<string, any>([['topic-object', {}], ['group-one', 'Group One']]);
    const mapForG2 = new Map<string, any>([['group-two', 'Group Two']]);
    const mapForG3 = new Map<string, any>([['group-three', 'Group Three'], ['group-year-month', '2019/04']]);

    const flat: MenuDisplayItemModel[] = [
        { id: 29, displayText: 'item one [G1]', map: mapForG1 },
        { id: 30, displayText: 'item two [G1]', map: mapForG1 },
        { id: 31, displayText: 'item three [G1]', map: mapForG2 },
        { id: 32, displayText: 'item four [G2]', map: mapForG2 },
        { id: 33, displayText: 'item five [G2]', map: mapForG2 },
        { id: 34, displayText: 'item six [G2]', map: mapForG2 },
        { id: 35, displayText: 'item seven [G3]', map: mapForG3 }
    ];

    const grouped = DisplayItemUtility.displayInGroups(flat, 'group-', true);
    expect(grouped).toBeTruthy();
    expect(grouped.length).toBeGreaterThan(0);

    const stringified = DisplayItemUtility.stringifyAll(grouped);
    expect(stringified).toBeTruthy();

    console.log({ grouped, stringified });
});

it('should get a mapped pair or return a default pair', () => {
    const result = [...JsonItems].find(i => i.id === 'studio-status-report-2019-03');
    const item =  result as MenuDisplayItemModel;
    expect(item).toBeTruthy();
    item.map = MapObjectUtility.getMap(item.map);

    console.log(
        'getItemMapPair',
        DisplayItemUtility.getItemMapPair(item, 'group-year-month-'),
        DisplayItemUtility.getItemMapPair(item, 'topic-')
    );
});

it('should sort fallback group to the end', () => {

    const mapForG1 = new Map<string, any>([['topic-one', 'First Topic'], ['group-one', 'Group One']]);
    const mapForG2 = new Map<string, any>([['group-two', 'Group Two']]);
    const mapForG3 = new Map<string, any>([['topic-two', 'Second Topic'], ['group-three', 'Group Three']]);

    const flat: MenuDisplayItemModel[] = [
        { id: 36, displayText: 'item one [G1]', map: mapForG1 },
        { id: 37, displayText: 'item two [G1]', map: mapForG1 },
        { id: 38, displayText: 'item three [G1]', map: mapForG2 },
        { id: 39, displayText: 'item four [G2]', map: mapForG2 },
        { id: 40, displayText: 'item five [G2]', map: mapForG2 },
        { id: 41, displayText: 'item six [G2]', map: mapForG2 },
        { id: 42, displayText: 'item seven [G3]', map: mapForG3 }
    ];

    const grouped = DisplayItemUtility.displayInGroups(flat, 'topic-', false);
    expect(grouped).toBeTruthy();
    expect(grouped.length).toBeGreaterThan(0);

    console.log({grouped});
    expect(grouped[grouped.length - 1].id).toEqual(DISPLAY_ITEM_GROUP_NONE.id);
});
