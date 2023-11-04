import { Brand } from "@/types/brand";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "Rotary Budanilkantha",
    href: "#",
    image: "/images/logo/logo.png",
  },
  {
    id: 2,
    name: "RAC Kupandol",
    href: "#",
    image: "/images/collab/kopundol.png",
  },
  {
    id: 3,
    name: "RAC Vedavyasa",
    href: "#",
    image: "/images/collab/vedavayas.png",
  },
  {
    id: 4,
    name: "RAC Bhadrapur",
    href: "#",
    image: "/images/collab/bhadrapur.png",
  },
  {
    id: 5,
    name: "SSRC",
    href: "#",
    image: "/images/collab/SSRC.png",
  },
];

const PatnerClubs = () => {
  return (
    <section className="pt-10">
      <div className="container">
        <SectionTitle
          title="Our Collaborators"
          paragraph="The rotary, SSRC and quarduplates clubs are our collaborators."
          center
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-between rounded-md bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s"
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatnerClubs;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 my-4 flex flex-col items-center justify-center sm:mx-4 xl:mx-6 2xl:mx-8">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="flex items-center justify-center relative h-20 w-full "
      >
        <Image
          src={image}
          alt={name}
          width={80}
          height={50}
          className="object-cover"
        />
      </a>
      <h4 className="text-center mt-2">{name}</h4>
    </div>
  );
};
