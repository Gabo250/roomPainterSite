function getObjKeysValues(obj) {
    if(typeof obj !== 'object') {
        throw new Error("The passed parameter is not an object");
    }

    const keys = Object.keys(obj);
    const values = Object.values(obj);

    return [keys, values];
}

export default getObjKeysValues;