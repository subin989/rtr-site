"use client";
import { Feature } from "@/types/feature";

const SingleMemberCard = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full flex flex-col items-center">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-5 flex h-[70px] w-[70px] mx-auto items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl text-center">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color text-center">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleMemberCard;
