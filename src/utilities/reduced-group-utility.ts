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
        const keyGetter = (datum: {[key: string]: any}) => Object.getOwnPropertyNames(datum)[0];
        const initialValue: { [key: string]: T[] } = {};
        const reduction = groups
            .map(i => {
                const o = {} as { [key: string]: T[] };
                const k = i.key as string;
                o[k] = i.values;
                return o;
            })
            .reduce(
            (
                accumulator: { [key: string]: T[] },
                current: { [key: string]: T[] },
                i: number,
                dataRef: any,
                k: string = keyGetter(current)
            ) => ({...current, ...accumulator}),
            initialValue
        ); console.log({reduction});

        return reduction;
    }
}
