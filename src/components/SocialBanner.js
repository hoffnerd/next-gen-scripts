import styles from "@/styles/components/Jumbotron.module.css"
import { renderFontAwesomeIcons } from "@/util/icons";

const SocialBanner = () => {
    // const phrase = "The Shape of Scripts to Come";
    // const scrambledPhrase = phrase.split('').sort(() => 0.5 - Math.random()).join('');

    return <h2 className="text-2xl font-black">
        {renderFontAwesomeIcons(
            [ "faTwitch", "faYoutube", "faDiscord", "faXTwitter", "faThreads", "faInstagram" ],
            [
                
            ]
        )}
    </h2>
}
export default SocialBanner;