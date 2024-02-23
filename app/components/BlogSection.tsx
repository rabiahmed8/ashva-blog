'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogImage, getBlogList } from "@/app/apiCalls/apiCalls";

const BlogSection = () => {
  //  const blogList

  const base_url = "https://ashva.pythonanywhere.com/";

  useEffect(() => {

    getBlogList(base_url).then((data) => {
      console.log(data);
    });

    getBlogImage(base_url).then((data) => {
      console.log(data);
    });
  }, []);




  return (
    <div className="py-20">
      <div className="flex items-center">
        <Link href={"/blog"} className="font-normal text-2xl">
          Read the blog{" "}
        </Link>
        {/* <span className="font-normal text-2xl">Read the blog</span> */}
        <Image src="/arrow-icon.png" alt="arrow Icon" width={30} height={30} />
      </div>

      <div className="pt-10 flex gap-11">
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
