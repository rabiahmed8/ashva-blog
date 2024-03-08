"use client";
import { contactForm, getBlogContent } from "@/app/apiCalls/apiCalls";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BlogData } from "../constants/DTO";

const Blog = () => {
  const base_url = "https://ashva.pythonanywhere.com/";

  const [data, setData] = useState<BlogData | null>(null);

  useEffect(() => {
    getBlogContent(base_url)
      .then((blogData: BlogData) => {
        // console.log("getBlogContent: ", blogData);
        setData(blogData);
      })
      .catch((error) => {
        console.error("Error fetching blog content:", error);
      });
  }, []);

  return (
    <div className="px-40 pt-36 max-[1440px]:px-20 max-[1024px]:px-4">
      <div className="flex gap-4 max-[1024px]:flex-col">
        <div>
          <h2 className="max-w-[1000px] text-3xl font-bold">
            {/* Taming the Torrent: How US Technology Can Help Malaysia Weather the
            Flood */}
            {data?.intro_text}
          </h2>
          <p className="pt-3 text-xl font-normal">{data?.subtitle}</p>
          <Image
            className="pt-7"
            src="/blog-1.png"
            alt="Blog thumbnail"
            width={400}
            height={340}
          />

          {data?.sections.map(({ heading, paragraph }, index) => (
            <div key={index} className="max-w-[1000px]">
              <h2 className="pt-7 text-2xl font-bold">{heading}</h2>
              <p className="pt-3 text-xl font-normal">{paragraph}</p>
            </div>
          ))}
        </div>

        <div className="mt-40 flex h-fit flex-col gap-5 overflow-auto">
          <div className="flex gap-5">
            <div className="w-32">
              <Image
                className=" aspect-auto"
                src="/blog-1.png"
                alt="blog image"
                width={400}
                height={340}
              />
            </div>
            <div>
              <h1 className="text-lg font-bold">Blog 1</h1>
              <p className="pt-3 text-sm font-normal">Blog Description</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-32">
              <Image
                className=" aspect-auto"
                src="/blog-1.png"
                alt="blog image"
                width={400}
                height={340}
              />
            </div>
            <div>
              <h1 className="text-lg font-bold">Blog 2</h1>
              <p className="pt-3 text-sm font-normal">Blog Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
