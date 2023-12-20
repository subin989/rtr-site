import AboutSectionTwo from "@/components/About/AboutSection";
import PatnerClubs from "@/components/PatnerClub";
import ScrollUp from "@/components/Common/ScrollUp";
import CurrentMember from "@/components/CurrentMember";
import Hero from "@/components/Hero";
import Members from "@/components/Members";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionTwo />
      <PatnerClubs />
      <CurrentMember />
      <Members />
    </>
  );
}
