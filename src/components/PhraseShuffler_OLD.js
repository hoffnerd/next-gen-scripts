"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/components/Jumbotron.module.css";
import { isArray, isObj } from "@/util";

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

const hasMovable = (array) => {

    let movable = false;

    if(!isArray(array)) return false;

    for(let i = 0; i < array.length-1; i++){
        const obj = array[i];
        if(obj && obj.movable !== false){
            movable = true;
            break;
        }
    }

    return movable;
}

const pickRandomIndex = (array, index) => {
    let randomIndex = Math.floor(Math.random() * (index + 1));
    if(randomIndex && array[randomIndex] && array[randomIndex].movable === false) return pickRandomIndex(array);
    return randomIndex
}

const shuffleArray = (givenArray, checkForMatch=true) => {
    if(!(isArray(givenArray) && hasMovable(givenArray))) return givenArray;

    let array = [...givenArray];

    for (let index = array.length - 1; index > 0; index--) {
        let randomIndex = pickRandomIndex(array, index);
        if(randomIndex && array[randomIndex] && array[randomIndex].movable !== false && array[index] && array[index].movable !== false) [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    }

    if(checkForMatch){
        array = array.map((obj, index) => obj && phraseArray.findIndex(phraseObj=>phraseObj.key===obj.key) === index ? { ...obj, movable:false } : obj);
    }



    // let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    // while (currentIndex > 0) {
    //     if(array[currentIndex] && array[currentIndex].key !== phraseArray[currentIndex].key){
            
    //         // Pick a remaining element.
    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex--;
        
    //         // And swap it with the current element.
    //         [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    //     }else{
    //         currentIndex--;
    //     }
    // }

    return array;
    // return array.reduce(([a,b])=>(b.push(...a.splice(Math.random()*a.length|0, 1)), [a,b]),[[...array],[]])[1]
}

const shuffle = (string) => {
    let newString = `${string}`;
    return newString.split('').sort(() => 0.5 - Math.random()).join('');
}

const PhraseScrambler = () => {

    const [scrambledPhrase, setScrambledPhrase] = useState(null);
    
    useEffect(() => {
        console.log`og use effect`
        setScrambledPhrase(shuffleArray(phraseArray, false))
    }, []);

    useEffect(() => {
        // if(scrambledPhrase === phrase) return;
        // console.log`hit`
        isArray(scrambledPhrase) && setTimeout(() => setScrambledPhrase(shuffleArray(scrambledPhrase)), 500);
    }, [scrambledPhrase]);

    const renderCharacters = () => {
        let characters = [];

        if(!isArray(scrambledPhrase)) return [];
        
        for (let i in scrambledPhrase){
            const obj = scrambledPhrase[i];
            isObj(obj, ["key", "display"]) && characters.push(
                <motion.div key={obj.key} layout transition={{ ease: "linear", stiffness: 100 }}>
                    {obj.display === " " ? <>&nbsp;</> : obj.display}
                </motion.div>
            )
        }
        return characters;
    }

    return <div className="flex text-5xl font-normal py-6">
        {/* <h2 className="">{scrambledPhrase}</h2>
        <h2 className="text-5xl font-normal py-6">{phrase}</h2> */}
        {renderCharacters()}
    </div>
}
export default PhraseScrambler;