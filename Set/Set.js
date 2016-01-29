"use strict"

class SetDataStructure {
    constructor() {
        this._set = new Set()
    }
    add(...values) {
        values.forEach(value => {
            this._set.add(value);
        });
    }
    remove(...values) {
        values.forEach(value => {
            this._set.delete(value);
        });
    }
    union(set2) {
        let unionSet = new Set([...this._set], [...set2._set]);
        return unionSet;
    }
    difference(set2) {
        let differenceSet = new Set([...this._set].filter(x => !set2._set.has(x)));
        return differenceSet;
    }
    intersect(set2) {
        let intersectionSet = new Set([...this._set].filter(x => set2._set.has(x)));
        return intersectionSet;
    }
}