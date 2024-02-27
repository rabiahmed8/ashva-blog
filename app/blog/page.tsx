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
    <div className="px-40 max-[1440px]:px-20 max-[1024px]:px-4 pt-36">
      <h2 className="font-bold text-3xl max-w-[1200px]">
        {/* Taming the Torrent: How US Technology Can Help Malaysia Weather the
        Flood */}
        {data?.intro_text}
      </h2>
      <p className="font-normal text-xl pt-3">{data?.subtitle}</p>
      <Image
        className="pt-7"
        src="/blog-1.png"
        alt="Blog thumbnail"
        width={400}
        height={340}
      />

      {data?.sections.map(({ heading, paragraph }, index) => (
        <div key={index} className="max-w-[1000px]">
          <h2 className="font-bold text-2xl pt-7">
            {heading}
          </h2>
          <p className="font-normal text-xl pt-3">
            {paragraph}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
