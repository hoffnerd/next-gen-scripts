import styles from "@/styles/components/Jumbotron.module.css"

const Jumbotron = () => (
    <h1 className={styles.jumbotronText}>
        <div className="animatedText">Next</div>
        <div className={styles.staticText}>Gen</div>
        <div className="animatedText brandAltered">Scripts</div>
    </h1>
);
export default Jumbotron;