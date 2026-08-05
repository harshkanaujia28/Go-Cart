'use client'
import { useRouter } from "next/navigation";
import { categories } from "@/assets/assets";

const CategoriesMarquee = () => {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/shop${category === "All" ? "" : `?category=${category}`}`);
  };

  return (
    <div className="overflow-hidden w-full relative max-w-7xl mx-auto select-none group sm:my-20">
      {/* Left gradient */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

      {/* Scrolling content */}
      <div className="flex min-w-[200%] animate-[marqueeScroll_40s_linear_infinite] group-hover:[animation-play-state:paused] gap-4">
        {[...categories, ...categories].map((company, index) => (
          <button
            key={index}
            className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300"
            onClick={() => handleCategoryClick(company)}
          >
            {company}
          </button>
        ))}
      </div>

      {/* Right gradient */}
      <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

      {/* Add keyframes for marquee */}
      <style jsx>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default CategoriesMarquee;
