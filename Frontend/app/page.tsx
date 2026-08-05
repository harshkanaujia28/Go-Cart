'use client';

import Hero from '@/components/Hero';
import LatestProducts from '@/components/LatestProducts';
import BestSelling from '@/components/BestSelling';
import OurSpecs from '@/components/OurSpec';
import Newsletter from '@/components/Newsletter';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer"
import WhyUs from '@/components/whyus';


export default function Home() {
  return (
    <>
    
    <Navbar/>
    <div>
      <Hero />
      <LatestProducts />
      <WhyUs/>
      <BestSelling />
      <OurSpecs />
      <Newsletter />
    </div>
    <Footer/>
    </>
  );
}
