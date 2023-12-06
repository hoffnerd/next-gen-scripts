import Jumbotron from "@/components/Jumbotron";
import PhraseScrambler from "@/components/PhraseShuffler";
import SocialBanner from "@/components/SocialBanner";


const Page = () => (
    <main className="flex flex-col items-center p-24">
        <Jumbotron/>
        <PhraseScrambler/>
        <SocialBanner/>
    </main>
)
export default Page;