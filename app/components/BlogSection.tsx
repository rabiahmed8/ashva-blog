"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogImage, getBlogList } from "@/app/apiCalls/apiCalls";

interface Blog {
  id: number;
  title: string;
  timestamp: string;
  img_src: string;
}

const BlogSection = () => {
  //  const blogList

  const base_url = "https://ashva.pythonanywhere.com/";

  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogList(base_url).then((data) => {
      console.log("getBlogList", data);
      console.log("getBlog", data[0].title);
      setBlogData(data);
    });

    // getBlogImage(base_url).then((data) => {
    //   console.log("getBlogImage", data);
    // });
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

          {blogData && blogData.length > 0 && (
      <div className="pt-10 flex flex-wrap gap-11">
        <div className="flex flex-col gap-4 w-[470px]">
            <h1 className="font-bold text-2xl blogH h-[96px]">{blogData[0].title}</h1>
          <Image
          src="/blog-1.png"
          alt="Blog Thumbnail"
          width={400}
          height={340}
          className="w-[470px]"
          />
          <p className="font-normal text-xl">{blogData[0].timestamp}</p>
        </div>

        <div className="flex flex-col gap-4 w-[470px]">
            <h1 className="font-bold text-2xl blogH h-[96px]">{blogData[1].title}</h1>
          <Image
            src="/blog-2.png"
            alt="Blog Thumbnail"
            width={400}
            height={340}
            className="w-[470px]"
          />
          <p className="font-normal text-xl">{blogData[1].timestamp}</p>
        </div>
        <div className="flex flex-col gap-4 w-[470px]">
          {blogData && blogData.length > 0 && (
            <h1 className="font-bold text-2xl blogH h-[96px]">{blogData[2].title}</h1>
          )}
          <Image
            src="/blog-3.png"
            alt="Blog Thumbnail"
            width={400}
            height={340}
            className="w-[30rem]"
          />
          <p className="font-normal text-xl">{blogData[2].timestamp}</p>
        </div>
      </div>
          )}

    </div>
  );
};

export default BlogSection;
