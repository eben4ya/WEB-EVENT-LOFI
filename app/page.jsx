import Hero from "./components/hero";
import AboutUs from "./components/aboutUs";
import BriefHistory from "./components/briefHistory";
import Footer from "./components/footer";
import Testimoni from "./components/testimoni";
import MediaPartner from "./components/mediaPartner";

// import { Source_Sans_3, IBM_Plex_Mono} from "@next/font/google";

// export const mono = IBM_Plex_Mono({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
//   variable: "--font-mono",
// });

// export const sans = Source_Sans_3({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs/>
      <BriefHistory />
      <Testimoni />
      <MediaPartner/>
      <Footer />
    </>
  );
}
