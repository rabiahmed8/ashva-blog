"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogImage, getBlogList } from "@/app/apiCalls/apiCalls";
import { Blog } from "../constants/DTO";

const BlogSection = () => {
  //  const blogList

  const base_url = "https://ashva.pythonanywhere.com/";

  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogList(base_url).then((data) => {
      // console.log("getBlogList", data);
      // console.log("getBlog", data[0].title);
      setBlogData(data);
    });

    // getBlogImage(base_url).then((data) => {
    //   console.log("getBlogImage", data);
    // });
  }, []);

  return (
    <div className="py-20">
      <div className="flex items-center">
        <Link href={"/blog"} className="text-2xl font-normal">
          Read the blog{" "}
        </Link>
        {/* <span className="font-normal text-2xl">Read the blog</span> */}
        <Image src="/arrow-icon.png" alt="arrow Icon" width={30} height={30} />
      </div>

      {blogData && blogData.length > 0 && (
        <div className="flex flex-wrap gap-11 pt-10">
          <div className="flex w-[470px] flex-col">
            <h1 className="blogH h-[96px] text-2xl font-bold">
              {blogData[0].title}
            </h1>
            <Image
              src="/blog-1.png"
              alt="Blog Thumbnail"
              width={400}
              height={340}
              className="w-[470px]"
            />
            <p className="pt-4 text-base font-normal text-[#757575]">
              {blogData[0].timestamp}
            </p>
          </div>

          <div className="flex w-[470px] flex-col">
            <h1 className="blogH h-[96px] text-2xl font-bold">
              {blogData[1].title}
            </h1>
            <Image
              src="/blog-2.png"
              alt="Blog Thumbnail"
              width={400}
              height={340}
              className="w-[470px]"
            />
            <p className="pt-4 text-base font-normal text-[#757575]">
              {blogData[1].timestamp}
            </p>
          </div>
          <div className="flex w-[470px] flex-col">
            {blogData && blogData.length > 0 && (
              <h1 className="blogH h-[96px] text-2xl font-bold">
                {blogData[2].title}
              </h1>
            )}
            <Image
              src="/blog-3.png"
              alt="Blog Thumbnail"
              width={400}
              height={340}
              className="w-[30rem]"
            />
            <p className="pt-4 text-base font-normal text-[#757575]">
              {blogData[2].timestamp}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSection;
