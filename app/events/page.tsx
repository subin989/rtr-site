"use client";

import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleEvent from "@/components/Events/SingleEvent";
import eventData from "@/components/Events/eventData";

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Past Events"
        description="Relive the moments: Explore our past events, celebrating memories and showcasing our journey."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {eventData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleEvent blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
