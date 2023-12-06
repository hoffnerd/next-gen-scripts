import styles from "@/styles/components/Jumbotron.module.css"

const Jumbotron = () => (
    <h1 className={styles.jumbotronText}>
        <div className={styles.animatedText}>Next</div>
        <div className={styles.staticText}>Gen</div>
        <div className={`${styles.animatedText} ${styles.altered}`}>Scripts</div>
    </h1>
);
export default Jumbotron;