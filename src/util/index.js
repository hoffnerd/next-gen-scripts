
/**
 * Checks if a given value is an array and has a length greater than a specified value.
 * @param array - The `array` parameter is the variable that you want to check if it is an array.
 * @param [lengthToCheckFor=0] - int, optional parameter that specifies the minimum length that the array should have in order for the function to return `true`.
 * If this parameter is not provided, it defaults to 0, meaning that the function will return `true` if the array is not empty.
 * @returns bool, returns true if the input is an array and its length is greater than the specified lengthToCheckFor (or 0 if not specified), and false otherwise.
 */
export const isArray = (array, lengthToCheckFor = 0) =>  array && Array.isArray(array) && array.length > lengthToCheckFor;

/**
 * Checks if a given object is a valid object and optionally checks if it has specific keys.
 * @param obj - object that you want to check if it is indeed an object
 * @param [keysToCheckFor=null] - array of strings, each string is a key that should be present in the object.
 * @param [haveAllKeys=true] - boolean, optional: `true` by default. Determines whether all the keys in the `keysToCheckFor` array should be 
 * present in the `obj`. If `haveAllKeys` is set to `false`, then just one of the keys must be present in the object to return true.
 * @returns boolean, indicating whether the input `obj` is an object and whether it contains all or any of the specified keys.
 */
export const isObj = (obj, keysToCheckFor=null, haveAllKeys=true) => {
    let isObject = false;
    
    // checking every way that `obj` is indeed an object
    if(obj && obj !== null && Object.keys(obj).length > 0 && typeof obj === 'object' && !isArray(obj)) isObject = true;

    // return early with the isObject bool if isObject is still false OR if keysToCheckFor have not been provided or they are not an array.
    // this ensures that `obj` is in fact an object and `keysToCheckFor` is an array for the code below this return.
    if((!isObject) || (!isArray(keysToCheckFor))) return isObject;

    // start the check for keys by looping over them
    for(let i = 0; i < keysToCheckFor.length; i++){
        const key = keysToCheckFor[i];

        // as long `haveAllKeys` is true (it is by default) AND the key does not exist within the object THEN,
        // set isObject to false and stop the loop as this object does not have a property like it should. 
        if(haveAllKeys && !(key && obj[key])){
            isObject = false;
            break;
        }

        // OTHERWISE, as long `haveAllKeys` is set to false...
        else if(!haveAllKeys){

            // check that the key does exist within the object if so, 
            // set isObject to true and stop the loop as this object has as least one of the properties it should
            if(key && obj[key]){
                isObject = true;
                break;
            } 

            // OTHERWISE, set isObject to false in the event that none of the keys are present on `obj`
            else isObject = false;
        } 
    }

    // return whatever value is in `isObject`
    return isObject;
}