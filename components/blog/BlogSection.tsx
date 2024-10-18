import Image from "next/image";
import React from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src={"/hero.png"}
        alt="hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-volet-500 to-transparent w-full"></div>
        </div>
      </div>

      <div className="sticky top-10 ">
        <div className="text-orange-500 text-[14px] my-24 flex justify-center uppercase tracking-widest">
          [ BLOG ]
        </div>
      </div>

      <div>
        <BlogCard />
      </div>
    </section>
  );
};

export default BlogSection;
