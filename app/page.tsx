import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Events";
import PatnerClubs from "@/components/PatnerClub";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import CurrentMember from "@/components/CurrentMember";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Members from "@/components/Members";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Video /> */}
      <AboutSectionTwo />
      <PatnerClubs />
      <AboutSectionOne />
      <CurrentMember />
      <Members />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
