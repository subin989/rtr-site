import { Blog } from "@/types/blog";

const eventData: Blog[] = [
  {
    id: 1,
    title: "Club Installation",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/events/installation.jpg",
    author: {
      name: "Rtr. Subin Satyal",
      image: "/images/events/author-02.png",

      designation: "Club Admin",
    },
    tags: ["Club Admin"],
    publishDate: "2023-01-23",
  },
  {
    id: 2,
    title: "CV Writing",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/events/cv.jpg",
    author: {
      name: "Rtr. Simran Poudel",
      image: "/images/events/author-01.png",

      designation: "Professional Development Chair",
    },
    tags: ["Professional"],
    publishDate: "2023-03-15",
  },
  {
    id: 3,
    title: "Tree Plantation",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/events/tree.jpg",
    author: {
      name: "Rtr. Abiral Shretha",
      image: "/images/events/author-03.png",
      designation: "Club Service Chair",
    },
    tags: ["Club Service"],
    publishDate: "2023-04-12",
  },
];
export default eventData;
