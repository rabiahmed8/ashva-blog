"use client";
import { getBlogContent } from "@/app/apiCalls/apiCalls";
import Image from "next/image";
import React, { useEffect } from "react";

const Blog = () => {
  const base_url = "https://ashva.pythonanywhere.com/";

  useEffect(() => {
    getBlogContent(base_url).then((data) => {
      console.log('getBlogContent: ',data);
    });
  }, []);

  return (
    <div className="px-40 max-[1440px]:px-20 max-[1024px]:px-4 pt-36">
      <h2 className="font-bold text-4xl">
        Taming the Torrent: How US Technology Can Help Malaysia Weather the
        Flood
      </h2>
      <p className="font-normal text-2xl">
        Why Floods are tough in Malaysia and what U.S. technology is working
      </p>
      <Image src="/blog-1.png" alt="Blog thumbnail" width={400} height={340} />
      <p className="font-normal text-xl">
        Floods are a recurring nightmare for Malaysia, displacing thousands,
        damaging infrastructure, and costing billions. But amidst the
        devastation lies an opportunity for collaboration and innovation. By
        leveraging US technology and expertise, Malaysia can build resilience
        and weather these storms more effectively.
      </p>
      <h2 className="font-bold text-3xl">Understanding the Landscape:</h2>
      <p className="font-normal text-xl">
        Flooding in Malaysia stems from a complex interplay of factors - heavy
        rainfall, deforestation, inadequate drainage systems, and rapid
        urbanization. Addressing these challenges requires a multi-pronged
        approach, utilizing advanced tools and knowledge transfer.
      </p>
    </div>
  );
};

export default Blog;
