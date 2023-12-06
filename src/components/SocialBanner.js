import styles from "@/styles/components/SocialBanner.module.css";
import { renderFontAwesomeIcons } from "@/util/icons";



//______________________________________________________________________________________
// ===== Constants  =====
const defaultLinearGradientOptions = {duration:10, primary:"#7A5FFF", secondary:"#ffffff"};



//______________________________________________________________________________________
// ===== Component =====
const SocialBanner = () => {

    //______________________________________________________________________________________
    // ===== Render Functions =====
    const renderLinearGradient = (id, options={...defaultLinearGradientOptions}) => {
        const { duration, primary, secondary } = { ...defaultLinearGradientOptions, ...options }

        return <linearGradient id={id} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={secondary}>
                <animate attributeName="stop-color" values={`${secondary}; ${primary}; ${secondary}`} dur={`${duration}s`} repeatCount="indefinite"></animate>
            </stop>
            <stop offset="50%" stopColor={primary}>
                <animate attributeName="stop-color" values={`${primary}; ${secondary}; ${primary}; ${secondary}; ${primary}`} dur={`${duration}s`} repeatCount="indefinite"></animate>
            </stop>
            <stop offset="100%" stopColor={secondary}>
                <animate attributeName="stop-color" values={`${secondary}; ${primary}; ${secondary}`} dur={`${duration}s`} repeatCount="indefinite"></animate>
            </stop>
        </linearGradient>
    }



    //______________________________________________________________________________________
    // ===== Component Return =====
    return <div className={styles.bar}>
        <div className={styles.iconGroup}>

            <a className={`${styles.colorfulLink} ${styles.twitch}`} target="_blank" href="https://www.twitch.tv/nextgenscripts">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitch" className="svg-inline--fa fa-twitch undefined SocialBanner_twitch___2NqM" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <defs>{renderLinearGradient("twitch", {primary:"#9146FF"})}</defs>
                    <path fill="url('#twitch')" d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"></path>
                </svg>
            </a>
            <div className={`${styles.hiddenIcon} ${styles.twitch}`}>{renderFontAwesomeIcons("faTwitch")}</div>

            <a className={`${styles.colorfulLink} ${styles.youtube}`} target="_blank" href="https://www.youtube.com/channel/UChgEgTDWOX9oY8xJLRufUHw">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" className="svg-inline--fa fa-youtube " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <defs>{renderLinearGradient("youtube", {primary:"#FF0000"})}</defs>
                    <path fill="url('#youtube')" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
            </a>
            <div className={`${styles.hiddenIcon} ${styles.youtube}`}>{renderFontAwesomeIcons("faYoutube")}</div>

            <a className={`${styles.colorfulLink} ${styles.discord}`} target="_blank" href="https://discord.gg/MhJf7HEW">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" className="svg-inline--fa fa-discord " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <defs>{renderLinearGradient("discord", {primary:"#5865F2", secondary:"#57F287"})}</defs>
                    <path fill="url('#discord')" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                </svg>
            </a>
            <div className={`${styles.hiddenIcon} ${styles.discord}`}>{renderFontAwesomeIcons("faDiscord")}</div>
            
            <div className={`${styles.middleIcon}`}>{renderFontAwesomeIcons("faDiscord")}</div>

            <a className={`${styles.colorfulLink} ${styles.twitter}`} target="_blank" href="https://twitter.com/NextGenScripts">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="x-twitter" className="svg-inline--fa fa-x-twitter " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <defs>{renderLinearGradient("twitter", {primary:"#000000", secondary:"#1D9BF0"})}</defs>
                    <path fill="url('#twitter')" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
            </a>
            <div className={`${styles.hiddenIcon} ${styles.twitter}`}>{renderFontAwesomeIcons("faXTwitter")}</div>

            <a className={`${styles.colorfulLink} ${styles.threads}`} target="_blank" href="https://www.threads.net/@nextgenscripts">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="threads" className="svg-inline--fa fa-threads " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <defs>{renderLinearGradient("threads", {primary:"#cd486b", secondary:"#fbad50"})}</defs>
                    <path fill="url('#threads')" d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"></path>
                </svg>
            </a>
            <div className={`${styles.hiddenIcon} ${styles.threads}`}>{renderFontAwesomeIcons("faThreads")}</div>

            <a className={`${styles.colorfulLink} ${styles.instagram}`} target="_blank" href="https://www.instagram.com/nextgenscripts/">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <defs>{renderLinearGradient("instagram", {primary:"#fbad50", secondary:"#cd486b"})}</defs>
                    <path fill="url('#instagram')" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
            </a>
            <div className={`${styles.hiddenIcon} ${styles.instagram}`}>{renderFontAwesomeIcons("faInstagram")}</div>
            
            {/* <a className={`${styles.colorfulLink} ${styles.email}`} href="mailto:nextgenscripts@gmail.com">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <defs>{renderLinearGradient("email", {primary:"#2e78d8", secondary:"#d821f0"})}</defs>
                    <path fill="url('#email')" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                </svg>
            </a> */}
        </div>
    </div>
};
export default SocialBanner;