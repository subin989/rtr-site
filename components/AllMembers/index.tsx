import { MemberDetails } from "@/types/memberDetails";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "../Members/SingleTestimonial";

const testimonialData: MemberDetails[] = [
  {
    id: 1,
    name: "Rtr. Udit Kumar Mahato",
    designation: "President",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/datasavvy1998",
    insta_link: "https://www.instagram.com/datasavvy1998/",
    image: "/images/testimonials/udit.png",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 2,
    name: "Rtr. Anshu Maharjan",
    designation: "Immediate Past President",
    email: "Maharjan.anshu.am@gmail.com",
    phone: "9862680627",
    fb_link: "https://www.facebook.com/maharjan.anshu.am",
    insta_link: "https://www.instagram.com/aanshu.m/",
    image: "/images/testimonials/anshu.png",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 3,
    name: "Rtr. Shishir Aryal",
    designation: "Secretary",
    email: "aryalshishir1@gmail.com",
    phone: "9840478710",
    fb_link: "https://www.facebook.com/sisir.aryal.9",
    insta_link: "https://www.instagram.com/shishir_aryal_010/",
    image: "/images/testimonials/Shishir-Aryal.jpg",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 4,
    name: "Rtr. Binayak Bhattarai",
    designation: "Treasurer",
    email: "test@gmail.com",
    phone: "23566788",
    fb_link: "https://www.facebook.com/binayak.bhattarai.90",
    insta_link: "https://www.instagram.com/binayak_bhattarai/",
    image: "/images/testimonials/binayak.jpg",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 5,
    name: "Rtr. Subin Satyal",
    designation: "Club Admin",
    email: "satyalsubin33@gmail.com",
    phone: "9861866054",
    fb_link: "https://www.facebook.com/subinsatyal21",
    insta_link: "https://www.instagram.com/subinsatyal02/",
    image: "/images/testimonials/subin.jpg",
    content:
      "Passionate web developer and tech enthusiast with a heart for social impact and community involvement.",
  },
  {
    id: 6,
    name: "Rtr. Ishan Poudel",
    designation: "President Elect",
    email: "ishanpoudel15@gmail.com",
    phone: "9847386065",
    fb_link: "https://www.facebook.com/profile.php?id=100013864575180",
    insta_link: "https://www.instagram.com/itis_ishaann/",
    image: "/images/testimonials/ishan.jpg",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 7,
    name: "Rtr. Sushna Gurung",
    designation: "International Service Chair",
    email: "sushna.grg@gmail.com",
    phone: "9861788617",
    fb_link: "https://www.facebook.com/profile.php?id=100009133426904",
    insta_link: "https://www.instagram.com/_sushnax/",
    image: "/images/testimonials/Sushna-Gurung.jpg",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 8,
    name: "Rtr. Abiral Shrestha",
    designation: "Club Service Chair",
    email: "abiralstha399@gmail.com",
    phone: "9843564405",
    fb_link: "https://www.facebook.com/PandaOP99",
    insta_link: "https://www.instagram.com/shrestha_abiral99/",
    image: "/images/testimonials/Abiral-Shrestha.jpg",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 9,
    name: "Rtr. Simran Poudel",
    designation: "Professional Development Chair",
    email: "simranpoudel29@gmail.com",
    phone: "9818392627",
    fb_link: "https://www.facebook.com/profile.php?id=100009007588227",
    insta_link: "https://www.instagram.com/siimraan.p/",
    image: "/images/testimonials/simran.jpg",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 10,
    name: "Rtr. Manisha Ghimire",
    designation: "Membership Chair",
    email: "mghimire0008@gmail.com",
    phone: "9841563721",
    fb_link: "https://www.facebook.com/manisha.ghimire.mindful.lady",
    insta_link: "https://www.instagram.com/_manisha_ghimire_721/",
    image: "/images/testimonials/manisha.jpg",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 11,
    name: "Rtr. Manish Thapaliya",
    designation: "Joint Secretary",
    email: "mthapaliya0512@gmail.com",
    phone: "9803369377",
    fb_link: "https://www.facebook.com/manish.thapaliya.00",
    insta_link: "https://www.instagram.com/manish.thapaliya.7.0/",
    image: "/images/testimonials/Manish-Thapaliya.jpg",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 12,
    name: "Rtr. Bharat Kapari",
    designation: "Sergant at Arms",
    email: "bharatkaparikumar@gmail.com",
    phone: "9814822904",
    fb_link: "https://www.facebook.com/bharatkapari12",
    insta_link: "https://www.instagram.com/bharat_kapari/",
    image: "/images/testimonials/bharat.jpg",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 13,
    name: "Rtr. Sadiksha Ghimire",
    designation: "Public Image Chair",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/sadikshya.ghimire.3956/",
    insta_link: "https://www.instagram.com/_.sadikshyaghimire._/",
    image: "/images/testimonials/sadikshya.jpg",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 14,
    name: "Rtr. Shobhan Subedi",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/Sh0bhan.Subedi",
    insta_link: "https://www.instagram.com/shobhan.subedi/",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 15,
    name: "Rtr. Sudeep Fullel",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/sudeep.fullel",
    insta_link: "https://www.instagram.com/ra_vana11/",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 16,
    name: "Rtr. Manoj Shrestha",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/Manojshrestha17",
    insta_link: "https://www.instagram.com/mane_shrestha/",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 17,
    name: "Rtr. Bhawani Aryal",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/profile.php?id=100088647874917",
    insta_link: "https://www.instagram.com/awanielogy/",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 18,
    name: "Rtr. Dikshyant Madai ",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/profile.php?id=100088029733391",
    insta_link: "https://www.instagram.com/dikshantmadai/",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 18,
    name: "Rtr. Sanjay Kumar Shah",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/sanjay.sah.73750",
    insta_link: "https://www.instagram.com/sanjaysah904/",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id: 19,
    name: "Rtr. Sandeep Bikram Thapa ",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/srohan.thapa.5",
    insta_link: "",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id:20,
    name: "Rtr. Abhash Rai  ",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/abhash.rai.5",
    insta_link: "https://www.instagram.com/abhash_rai_/",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id:20,
    name: "Rtr. Anil KC",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/anilkc.barmuda.9",
    insta_link: "",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id:21,
    name: "Rtr. Aasha Limbu",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/aasha.limbu.12532",
    insta_link: "https://www.instagram.com/aashachongbang62/",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id:21,
    name: "Rtr. Shankar Tamang",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/profile.php?id=100082847344859",
    insta_link: "https://www.instagram.com/call_me__shank/",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id:22,
    name: "Rtr. Sanket Shrestha",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/profile.php?id=100070040209609",
    insta_link: "https://www.instagram.com/sanket_k.stha/",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id:23,
    name: "Rtr. Nishan Shrestha ",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/nishan.stha.7589",
    insta_link: "https://www.instagram.com/nishanshrestha40/",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id:24,
    name: "Rtr. Manjil Budathoki  ",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "https://www.facebook.com/profile.php?id=100080924981467",
    insta_link: "https://www.instagram.com/is_manjil/",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id:25,
    name: "Rtr. Shreya Poudel",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "",
    insta_link: "",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id:26,
    name: "Rtr. Himal Pandey",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "",
    insta_link: "https://www.instagram.com/mhrjn.rupak/",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id:27,
    name: "Rtr. Asmita Sharma Subedi ",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "",
    insta_link: "",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id:28,
    name: "Rtr. Sachina Shrestha",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "",
    insta_link: "",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
  {
    id:29,
    name: "Rtr. Prajesh Gyawali",
    designation: "General Member",
    email: "test@gmail.com",
    phone: "98765345456",
    fb_link: "",
    insta_link: "",
    image: "",
    content:
      "Embrace each day with purpose and passion. Your potential knows no bounds. Keep pushing forward!",
  },
];

const AllMembers = () => {
  return (
    <section className="relative z-10 bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="All Members- 2023/24"
          paragraph="All the club members of Rotaract Club of Budanilkantha."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <div className="absolute top-5 right-0 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-0 bottom-5 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default AllMembers;
