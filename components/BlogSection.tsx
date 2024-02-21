import React from "react";
import Image from "next/image";

const BlogSection = () => {
  return (
    <div className="py-20">
      <div className="flex items-center">
        <span className="font-normal text-2xl">Read the blog</span>
        <Image src="/arrow-icon.png"
        alt="arrow Icon"
        width={30}
        height={30}
        />
      </div>

      <div className="pt-20 flex gap-11">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Solving the Flood Problem</h1>
          <Image
            src="/blog-1.png"
            alt="Blog Thumbnail"
            width={400}
            height={340}
            className="w-[470px]"
          />
          <p className="font-normal text-xl">5:35pm Feb 17</p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Solving the Flood Problem</h1>
          <Image
            src="/blog-2.png"
            alt="Blog Thumbnail"
            width={400}
            height={340}
            className="w-[470px]"
          />
          <p className="font-normal text-xl">5:35pm Feb 17</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Solving the Flood Problem</h1>
          <Image
            src="/blog-3.png"
            alt="Blog Thumbnail"
            width={400}
            height={340}
            className="w-[30rem]"
          />
          <p className="font-normal text-xl">5:35pm Feb 17</p>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
