import SectionTitle from "../Common/SectionTitle";
import SingleMemberCard from "./SingleFeature";
import memberCategory from "./memberData";

const CurrentMember = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Current Member"
            paragraph="Active member, Board Member and General Member Number!!"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {memberCategory.map((feature) => (
              <SingleMemberCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CurrentMember;
