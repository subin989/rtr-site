"use client";
import { MemberDetails } from "@/types/memberDetails";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  LinkedinFilled,
  FacebookFilled,
  InstagramFilled,
} from "@ant-design/icons";
import Image from "next/image";

const SingleTestimonial = ({ testimonial }: { testimonial: MemberDetails }) => {
  const {
    name,
    image,
    email,
    phone,
    fb_link,
    insta_link,
    designation,
    content,
  } = testimonial;

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8 "
        data-wow-delay=".1s"
      >
        <div className="flex items-center justify-center mb-3">
          <div className="relative mr-4 h-[200px] w-full max-w-[200px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>
        </div>
        <div>
          <div className="w-full mb-3">
            <h5 className="flex items-center justify-center mb-2 text-xl font-semibold text-dark dark:text-white lg:text-lg xl:text-xl">
              {name}
            </h5>
            <p className="flex items-center justify-center text-sm text-body-color">
              {designation}
            </p>
          </div>
          <div className="w-full mb-3">
            <p className="flex items-center justify-center text-sm text-body-color">
              {content}
            </p>
          </div>
          <ul className="list-none p-0 ">
            <div className="flex items-center justify-center mb-3">
              <li className="flex items-center mr-3">
                <MailOutlined className="mr-2 text-primary" />
                <span className="text-body-color text-md">{email}</span>
              </li>
              <li className="flex items-center">
                <PhoneOutlined className="mr-2 text-primary" />
                <span className="text-body-color text-md">{phone}</span>
              </li>
            </div>
            <div className="flex items-center justify-center mb-3">
              <li className="flex items-center">
                <a
                  href={fb_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-lg underline"
                >
                  <FacebookFilled className="mr-3 text-white hover:text-primary" />
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href={insta_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-lg underline"
                >
                  <InstagramFilled className="mr-3 text-white hover:text-primary" />
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href={insta_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-lg underline"
                >
                  <LinkedinFilled className="mr-3 text-white hover:text-primary" />
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href={insta_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-lg underline"
                >
                  <TwitterOutlined className="mr-3 text-white hover:text-primary" />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SingleTestimonial;
