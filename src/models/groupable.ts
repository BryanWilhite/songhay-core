/**
 * defines a group-able visual
 *
 * @export
 */
export interface Groupable {
    /**
     * display text of the group
     */
    groupDisplayText?: string;

    /**
     * identifer of the group
     */
    groupId?: string | number;

    /**
     * returns `true` when group is visually collapsed
     */
    isCollapsed?: boolean;
}
