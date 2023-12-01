import styles from "@/styles/components/Jumbotron.module.css"
import PhraseScrambler from "./PhraseShuffler";

const Jumbotron = () => {
    // const phrase = "The Shape of Scripts to Come";
    // const scrambledPhrase = phrase.split('').sort(() => 0.5 - Math.random()).join('');

    return <>
        <h1 className="text-9xl font-black">
            <span className={styles.animatedText}>Next</span>
            <span>Gen</span>
            <span className={`${styles.animatedText} ${styles.altered}`}>Scripts</span>
        </h1>
        <PhraseScrambler />
    </>
}
export default Jumbotron;