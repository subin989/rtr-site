import AboutSection from "@/components/About/AboutSection";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Rotaract club of Budhanilkantha envisions itself as an outstanding club that practices social work and ensures to create opportunities for youth and strive to make a positive contribution to the society."
      />
      {/* <AboutSectionOne /> */}
      <AboutSection />
    </>
  );
};

export default AboutPage;
