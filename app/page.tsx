'use client'
import AboutSection from "@/app/components/AboutSection";
import BlogSection from "@/app/components/BlogSection";
import ContactForm from "@/app/components/ContactForm";
import Hero from "@/app/components/Hero";
import ProrgramsBenefits from "@/app/components/ProrgramsBenefits";
import { useEffect } from "react";

export default function Home() {

  return (
    <div className="px-40 max-[1440px]:px-20 max-[1150px]:px-4 pt-16">
      <Hero />
      <BlogSection />
      <AboutSection />
      <ProrgramsBenefits />
      <ContactForm />
    </div>
  );
}
