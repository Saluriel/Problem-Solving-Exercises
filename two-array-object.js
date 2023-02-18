// add whatever parameters you deem necessary


// accepts two arrays of varying lengths.

// The first array consists of keys and the second one consists of values. 

// Your function should return an object created from the keys and values. 
// If there are not enough values, the rest of keys should have a value of null. 
// If there not enough keys, just ignore the rest of values.

function twoArrayObject(arr1, arr2) {
    let result = {};

    arr1.forEach((arr1, i) => result[arr1] = arr2[i] || null);

    return result;
}
