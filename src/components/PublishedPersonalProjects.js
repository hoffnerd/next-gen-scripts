
// Styles------------------------------------------------
import styles from "@/styles/components/PublishedPersonalProjects.module.css"
// Components--------------------------------------------
import AnimatedCard from "./AnimatedCard";



//______________________________________________________________________________________
// ===== Data =====
const cardData = [
    // { key:"", display:"", description:"", outsideLink:"", image:"" },
    { key:"btt", display:"Beyond the Table", description:"Ever want your D&D Character immortalized as a playing card? Now is your chance! This site will grow to do this with beasts and maybe items and spells.", outsideLink:"https://beyondthetable.vercel.app/", image:"dnd.webp" },
    { key:"more", display:"More to Come...", description:"I have a lot of ideas and I love programming. More is on the horizon, keep your eyes peeled!", image:"moreToCome.webp" },
    // {
    //     key: "btt",
    //     display: "Beyond the Table",
    //     description: "Ever want your D&D Character immortalized as a playing card? Now is your chance! This site will grow to do this with beasts and maybe items and spells.",
    //     outsideLink: "https://beyondthetable.vercel.app/",
    //     image: { key:"dnd", alt:"Image of a Dragon", width:960, height:1280 },
    // },
    // {
    //     key: "more",
    //     display: "More to Come...",
    //     description: "I have a lot of ideas and I love programming. More is on the horizon, keep your eyes peeled!",
    //     image: { key:"moreToCome", alt:"Image of a Construction", width:664, height:928 },
    // },
]


//______________________________________________________________________________________
// ===== Component =====
const PublishedPersonalProjects = () => {

    const renderCards = () => cardData.map(card => (
        <AnimatedCard
            key={`card_${card.key}`}
            display={card.display}
            description={card.description}
            pathTo={card.pathTo}
            outsideLink={card.outsideLink}
            linkText={card.linkText}
            image={card.image}
            imageAlt={card.imageAlt}
        />
    ));


    return <>
        <h2 className={`${styles.header} animatedText personal`}>Published Personal Projects...</h2>
        <div className={styles.cardContainer}>{renderCards()}</div>
    </>
}
export default PublishedPersonalProjects;