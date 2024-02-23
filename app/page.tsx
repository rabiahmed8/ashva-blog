import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import ProrgramsBenefits from "@/components/ProrgramsBenefits";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="px-40 max-[1440px]:px-20 max-[1024px]:px-4 pt-16">
      <Hero />
      <BlogSection />
      <AboutSection />
      <ProrgramsBenefits />
      <ContactForm />
    </div>
  );
}
