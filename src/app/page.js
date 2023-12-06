import Jumbotron from "@/components/Jumbotron";
import PhraseScrambler from "@/components/PhraseShuffler";
import PublishedPersonalProjects from "@/components/PublishedPersonalProjects";
import SocialBanner from "@/components/SocialBanner";


const Page = () => <main>
    <div className="flex flex-col items-center px-24 pt-24">
        <Jumbotron/>
        <PhraseScrambler/>
    </div>
    <SocialBanner/>
    <div className="py-24 px-8 container mx-auto">
        <PublishedPersonalProjects/>
    </div>
</main>
export default Page;