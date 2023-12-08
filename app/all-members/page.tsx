"use client";
import AllMembers from "@/components/AllMembers";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Members = () => {
  return (
    <>
      <Breadcrumb
        pageName="Members"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AllMembers />
    </>
  );
};

export default Members;
