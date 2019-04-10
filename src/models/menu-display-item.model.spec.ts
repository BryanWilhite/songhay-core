import { Dictionary, groupBy } from 'lodash';

import { MenuDisplayItemModel } from './menu-display-item.model';

const flat: MenuDisplayItemModel[] = [
    { id: 1, displayText: 'item one [G1]', groupId: 'group-one', groupDisplayText: 'Group One' },
    { id: 2, displayText: 'item two [G1]', groupId: 'group-one', groupDisplayText: 'Group One' },
    { id: 3, displayText: 'item three [G1]', groupId: 'group-one', groupDisplayText: 'Group One' },
    { id: 4, displayText: 'item four [G2]', groupId: 'group-two', groupDisplayText: 'Group Two' },
    { id: 5, displayText: 'item five [G2]', groupId: 'group-two', groupDisplayText: 'Group Two' },
    { id: 6, displayText: 'item six [G2]', groupId: 'group-two', groupDisplayText: 'Group Two' },
    { id: 7, displayText: 'item seven [G3]', groupId: 'group-three', groupDisplayText: 'Group Three' }
];

it('should be groupable [lodash]', () => {
    const grouped = groupBy(flat, 'groupId') as Dictionary<MenuDisplayItemModel[]>;
    expect(grouped).not.toBeNull();
    console.log({grouped});

    const key = 'group-three';
    expect(grouped).toHaveProperty(key);
    expect(grouped[key]).toHaveLength(1);
});
