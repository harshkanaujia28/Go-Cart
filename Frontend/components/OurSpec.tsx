'use client';

import React from 'react';
import Title from './Title';
import { ourSpecsData } from '@/assets/assets';
import { LucideIcon } from 'lucide-react';

interface Spec {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string; // hex color
}

const OurSpecs: React.FC = () => {
  return (
    <div className='px-6 my-20 max-w-6xl mx-auto'>
      <Title
        visibleButton={false}
        title='Our Specifications'
        description="We offer top-tier service and convenience to ensure your shopping experience is smooth, secure and completely hassle-free."
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-10 mt-26'>
        {ourSpecsData.map((spec: Spec, index: number) => (
          <div
            key={index}
            className='relative h-44 px-8 flex flex-col items-center justify-center w-full text-center border rounded-lg group'
            style={{ borderColor: spec.accent }}
          >
            <h3 className='text-slate-800 font-medium'>{spec.title}</h3>
            <p className='text-sm text-slate-600 mt-3'>{spec.description}</p>
            <div
              className='absolute -top-5 text-white w-10 h-10 flex items-center justify-center rounded-md group-hover:scale-105 transition'
              style={{ backgroundColor: spec.accent }}
            >
              <spec.icon size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpecs;
