"use client";

import Image from "next/image";

export default function WhyUs() {
  return (
    <section className=" px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}> 
          {/* 16:9 aspect ratio container */}
          <Image
            src="/Hezire-website-banner2560x1280px-Hband-AI.webp"
            alt="Bridal Lehenga"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
