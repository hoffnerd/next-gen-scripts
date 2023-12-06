import Image from 'next/image'
import Link from 'next/link'
import styles from "@/styles/components/animatedCard.module.css";

/**
 * Card with an image, display, description, and a link.
 * @prop {string} display - Title for the card
 * @prop {string} description - Description to be shown on the card
 * @prop {string} pathTo - Internal link path if we are using one
 * @prop {string} outsideLink - External link path if we are using one
 * @prop {string} linkText - Text that the link will be displayed as
 * @prop {string} image - Path to the image to be displayed from the public/images directory
 * @prop {string} imageAlt - Alt text for the image
 * @returns An animated card
 */
const AnimatedCard = ({display, description, pathTo, outsideLink, linkText="Take Me There!", image, imageAlt="No Alt Image"}) => {
    return <div className={styles.card}>
        <div className={styles.imageContainer}>
            <Image className={styles.image} src={`/images/${image}`} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className={styles.content}>
            <h3 className={styles.title}>{display}</h3>
            <p className={styles.description}>{description}</p>
            {pathTo ? <Link className={styles.link} href={pathTo}>{linkText}</Link> : outsideLink && <a className={styles.link} href={outsideLink}>{linkText}</a>}
        </div>
    </div>;
}
export default AnimatedCard;

// PS: Thanks Charles!

/*
    <div className={styles.imageContainer}>
        {isObj(image, ["key", "alt"]) && <LazyLoadNextImage imageKey={image.key} alt={image.alt} width={image.width} height={image.height} />}
    </div>
*/