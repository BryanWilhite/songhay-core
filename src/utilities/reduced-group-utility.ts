import { ReducedGroup } from 'src/models/reduced-group';

/**
 * static routines for display-item models
 *
 * @export
 */
export class ReducedGroupUtility {
    /**
     * reduces @type {ReducedGroup[]} to @type {{ [key: any]: T[] }}
     *
     */
    public static reduceToObject<T>(groups: ReducedGroup[]): { [key: string]: T[] } {
        const keyGetter = (datum: ReducedGroup) => datum.key;
        const initialValue: { [key: string]: T[] } = {};
        const reduction = groups.reduce(
            (
                accumulator: { [key: string]: T[] },
                current: ReducedGroup,
                i: number,
                dataRef: any,
                k: any = keyGetter(current)
            ) => ({...current, ...accumulator}),
            initialValue
        );

        return reduction;
    }
}
