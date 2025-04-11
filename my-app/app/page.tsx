"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Import VideoCarousel dynamically with SSR disabled
const VideoCarousel = dynamic(() => import("./components/VideoCarousel"), {
  ssr: false,
});

export default function Home() {
  // Use client-side only rendering for the content
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render the content on the client to avoid hydration errors
  if (!isMounted) {
    return null; // Return nothing during SSR
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden relative">
      {/* Background metallic gradients */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-100/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-gray-200/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-gray-200/30 to-blue-100/20 rounded-full blur-3xl"></div>
      </div> */}

      {/* Enhanced Bottom Grainy Gradients */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Base gradient layer */}
        {/* <div className="h-64 bg-gradient-to-t from-blue-100/40 via-indigo-50/20 to-transparent"></div> */}

        <div className="absolute bottom-0 left-0 right-0 h-96 overflow-hidden">
          <div className="absolute -bottom-20 -left-40 w-[140%] h-64 bg-gradient-to-tr from-indigo-200/30 via-blue-100/20 to-transparent rounded-[100%] blur-2xl transform rotate-3"></div>
          <div className="absolute -bottom-10 left-1/4 w-96 h-48 bg-gradient-to-tr from-gray-200/40 via-blue-50/20 to-transparent rounded-full blur-xl transform -rotate-6"></div>
          <div className="absolute -bottom-24 right-1/4 w-[30rem] h-64 bg-gradient-to-tl from-blue-100/30 via-indigo-50/20 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-80 opacity-25 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "180px 180px",
          }}
        ></div>

        <div
          className="absolute bottom-0 left-0 right-0 h-48 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        {/* Logo and Coming Soon Badge */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg w-8 h-8 shadow-md"></div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-2xl tracking-tight">
              ugz.ai
            </span>
          </div>
          <div className="bg-white/80 backdrop-blur-md px-5 py-2 rounded-full mb-10 shadow-sm border border-gray-200/50">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 text-sm font-medium">
              Available in February 2024
            </span>
          </div>
        </div>

        {/* Main Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold pb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
            Find Winning Ads
          </h1>
          <p className="text-xl text-slate-600 max-w-xl mx-auto font-light">
            Write your script → Pick an avatar → Generate video. Blah blah write
            this.
          </p>
        </div>

        {/* Email Capture Form */}
        <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto mb-16">
          <input
            type="email"
            placeholder="Email"
            className="flex-grow px-4 py-3 rounded-lg bg-white/80 backdrop-blur-md border border-gray-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-lg transition-all duration-300 shadow-md">
            Sign Up
          </button>
        </div>

        {/* Video Carousel Section - now using the client component */}
        <VideoCarousel />

        {/* Footer Links */}
        <div className="mt-16 text-center">
          <div className="flex justify-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
