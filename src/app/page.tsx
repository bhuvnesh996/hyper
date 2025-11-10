
import Hero from "./component/Hero";
import TrustedBy from "./component/TrustedBy";
import Influence from "./component/Influence";
import AsSeenIn from "./component/AsSeenIn";
import Team from "./component/Team";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import MoneyMeet from "./component/MoneyMeet";

export default function Home() {
  return (
    <main >
        <Hero />
     
        <MoneyMeet />
        <TrustedBy />
        <Influence />
        <AsSeenIn />
        <Team />
        <Contact />

     
    </main>
  );
}
