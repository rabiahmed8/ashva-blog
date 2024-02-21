import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-40">
      <Hero />
      <BlogSection />
      <AboutSection />
    </div>
  );
}
