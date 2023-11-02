"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Members from "@/components/Members";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Past Presidents"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Members />
    </>
  );
};

export default AboutPage;
