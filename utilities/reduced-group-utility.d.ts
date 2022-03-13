import { ReducedGroup } from 'src/models/reduced-group';
/**
 * static routines for display-item models
 *
 * @export
 */
export declare class ReducedGroupUtility {
    /**
     * reduces @type {ReducedGroup[]} to @type {{ [key: any]: T[] }}
     *
     */
    static reduceToObject<T>(groups: ReducedGroup[]): {
        [key: string]: T[];
    };
}
