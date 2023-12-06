"use client"

// Packages----------------------------------------------
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Styles------------------------------------------------
import styles from "@/styles/components/PhraseShuffler.module.css"
// Other-------------------------------------------------
import { isArray } from "@/util";




//______________________________________________________________________________________
// ===== Data  =====
const phraseArray = [
    { key:"t1", display:"T" },
    { key:"h1", display:"h" },
    { key:"e1", display:"e" },
    { key:"space1", display:" " },
    { key:"s1", display:"S" },
    { key:"h2", display:"h" },
    { key:"a1", display:"a" },
    { key:"p1", display:"p" },
    { key:"e2", display:"e" },
    { key:"space2", display:" " },
    { key:"o1", display:"o" },
    { key:"f1", display:"f" },
    { key:"space3", display:" " },
    { key:"s2", display:"S" },
    { key:"c1", display:"c" },
    { key:"r1", display:"r" },
    { key:"i1", display:"i" },
    { key:"p2", display:"p" },
    { key:"t2", display:"t" },
    { key:"s3", display:"s" },
    { key:"space4", display:" " },
    { key:"t3", display:"t" },
    { key:"o2", display:"o" },
    { key:"space5", display:" " },
    { key:"c2", display:"C" },
    { key:"o3", display:"o" },
    { key:"m1", display:"m" },
    { key:"e3", display:"e" },
];



//______________________________________________________________________________________
// ===== Util Functions  =====

/**
 * Finds the indexes from the input `array` where the objects have a property of "movable" which value is not EXACTLY false. 
 * Other false-y values are still consider movable. This is so we don't need to define "movable" on each object.
 * @param array - array of objects, represents the shuffled phrase.
 * @returns array of indexes of objects in the input `array` that are considered movable.
 */
const getMovableIndexes = (array) => {
    let movableIndexes = [];
    array.forEach((obj, index) => !(obj && obj.movable === false) && movableIndexes.push(index))
    return movableIndexes;
}

/**
 * Picks a random index from the given `array`. The only indexes that can be selected are those that are moveable.
 * @param array - array of objects, represents the shuffled phrase, from which you want to pick a random index.
 * @returns int, an index within the given `array` that is allowed to be moved.
 */
const pickRandomIndex = (array) => {
    const movableIndexes = getMovableIndexes(array);

    // return early w/ a 0 because there are no index that can be moved
    if(!isArray(movableIndexes)) return 0;

    // get a random index from the `movableIndexes` array 
    const randomIndex = Math.floor(Math.random() * movableIndexes.length);

    // what is returned is the number that represents the index of the main given `array`
    return movableIndexes[randomIndex];
}

/**
 * Shuffles the given array by randomly swapping the positions of movable objects, and 
 * optionally checks for matches with a correct array to make some objects non-movable.
 * @param arrayToShuffle - array that you want to shuffle.
 * @param [checkForMatch=false] - boolean, determines whether or not to check for matches in the shuffled array. 
 * If set to `true`, the function will return a new array where the objects that are in the correct places are no longer movable. 
 * If set to `false` (default), will return the shuffled array with no other alterations
 * @param [correctArray=null] - array of objects, optional parameter (required if `checkForMatch` is set to true). 
 * Represents the correct order of the objects in the array.
 * @returns shuffled version of the given `arrayToShuffle`. If the `checkForMatch` parameter is set to `true` and a `correctArray` is provided, 
 * the function will also mark the objects that are in the correct places as not movable.
 */
const shuffleArray = (arrayToShuffle, checkForMatch=false, correctArray=null) => {

    // return early with the `arrayToShuffle` as that it isn't an array
    if(!isArray(arrayToShuffle)) return arrayToShuffle;

    // return early with the `arrayToShuffle` as that no objects are movable
    const movableIndexes = getMovableIndexes(arrayToShuffle);
    if(!isArray(movableIndexes)) return arrayToShuffle;

    // shuffle the movable objects with in the array
    let array = [...arrayToShuffle];
    for (let i = movableIndexes.length - 1; i > 0; i--) {
        const givenArrayIndex = movableIndexes[i];
        const randomIndex = pickRandomIndex(array);
        [array[givenArrayIndex], array[randomIndex]] = [array[randomIndex], array[givenArrayIndex]];
    }

    // if we want to check for matches, we will return a new array where the objects that are in the correct places are no longer moveable
    return checkForMatch && isArray(correctArray) ? array.map((obj, index) => obj && correctArray.findIndex(correctObj=>correctObj.key===obj.key) === index ? { ...obj, movable:false } : obj) : array;
}



//______________________________________________________________________________________
// ===== Component  =====
const PhraseShuffler = () => {

    //______________________________________________________________________________________
    // ===== Component State  =====
    const [shuffledPhrase, setShuffledPhrase] = useState(null);
    


    //______________________________________________________________________________________
    // ===== Component Use Effects  =====

    /**
     * Set up the initial shuffle here because if tried to shuffle in the states declaration, we get a hydration error
     */
    useEffect(() => {
        setShuffledPhrase(shuffleArray(phraseArray))
    }, []);

    /**
     * Shuffle and keep shuffling every less than a 1 second until the phrase is correct
     */
    useEffect(() => {
        isArray(shuffledPhrase) && setTimeout(() => setShuffledPhrase(shuffleArray(shuffledPhrase, true, phraseArray)), 312.5);
    }, [shuffledPhrase]);



    //______________________________________________________________________________________
    // ===== Component Return  =====
    return <div className={styles.phraseShuffler}>
        {isArray(shuffledPhrase) && shuffledPhrase.map(obj => (
            <motion.div key={obj.key} layout transition={{ ease: "linear", stiffness: 100 }}>
                {obj.display === " " ? <>&nbsp;<br/></> : obj.display}
            </motion.div>
        ))}
    </div>
}
export default PhraseShuffler;