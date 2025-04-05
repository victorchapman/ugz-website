import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1117]">
      {/* Navigation Bar Container */}
      <div className="w-full fixed top-0 animate-slideDown z-50">
        <nav className="max-w-[900px] mx-auto flex items-center justify-between px-4 py-3 border border-gray-700/50 rounded-2xl my-4 bg-[#151821] backdrop-blur-sm shadow-lg">
          <div className="flex items-center">
            {/* Logo container */}
            <div className="flex items-center gap-1.5">
              <div className="bg-[#8b5cf6] rounded-lg w-5 h-5"></div>
              <span className="text-gray-100 font-semibold text-[14px]">
                ugz.ai
              </span>
            </div>
          </div>

          {/* Center Navigation Items */}
          <div className="hidden md:flex space-x-5">
            <a
              href="#features"
              className="text-gray-100 text-[14px] font-medium hover:text-white"
            >
              Features
            </a>
            <a
              href="#affiliate"
              className="text-gray-100 text-[14px] font-medium hover:text-white"
            >
              Affiliate
            </a>
            <a
              href="#pricing"
              className="text-gray-100 text-[14px] font-medium hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#languages"
              className="text-gray-100 text-[14px] font-medium hover:text-white"
            >
              Languages
            </a>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-2">
            <button className="px-2.5 py-1.5 text-gray-100 text-[14px] font-medium hover:text-white">
              Login
            </button>
            <button className="px-3.5 py-1.5 bg-[#8b5cf6] text-white text-[14px] font-medium rounded-lg hover:bg-[#7c3aed] flex items-center gap-1">
              Get Started
              <span className="text-sm">›</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Add padding to account for fixed navbar */}
      <div className="h-24"></div>

      {/* Main Content Area */}
      <main className="max-w-[1200px] mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center pt-16 pb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-[800px] mx-auto leading-tight">
            Automate product TikToks
            <br />
            for your business
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8">
            Write your script → Pick an avatar → Generate video
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-3 bg-[#8b5cf6] text-white text-lg font-medium rounded-xl flex items-center gap-2 hover:bg-[#7c3aed] transition-all duration-200 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              Start Now <span className="text-lg">›</span>
            </button>
            <button className="px-8 py-3 bg-[#2a2d36] text-white text-lg font-medium rounded-xl flex items-center gap-2 hover:bg-[#363a45] transition-all duration-200 shadow-[0_0_15px_rgba(42,45,54,0.3)]">
              Demo <span className="text-lg">›</span>
            </button>
          </div>
        </div>
      </main>

      {/* Video Grid Container */}
      <div className="relative overflow-hidden py-8">
        <div className="flex gap-4">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="min-w-[200px] aspect-[9/16] bg-gray-800/50 rounded-xl hover:border-2 hover:border-[#8b5cf6] transition-all duration-300"
              ></div>
            ))}
        </div>
      </div>

      {/* Why ugz.ai Section */}
      <section className="max-w-[1200px] mx-auto px-4 py-20">
        <h2 className="text-[40px] font-bold text-white text-center mb-4">
          Why ugz.ai?
        </h2>
        <p className="text-gray-400 text-center text-lg mb-16">
          See why ugz.ai is the smarter choice for high-performing videos.
        </p>

        <div className="grid grid-cols-4 gap-4">
          {/* First column - Features */}
          <div className="col-span-1">
            <div className="h-20 flex items-center"></div>{" "}
            {/* Empty header space */}
            {/* Feature rows */}
            <div className="bg-gray-100/5 h-14 flex items-center px-4 mb-1 rounded-lg relative z-10">
              <span className="text-gray-300 font-medium flex items-center">
                Cost-effective
                <span className="ml-2 text-gray-400 border border-gray-400 rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">
                  i
                </span>
              </span>
            </div>
            <div className="bg-gray-100/5 h-14 flex items-center px-4 mb-1 rounded-lg">
              <span className="text-gray-300 font-medium flex items-center">
                Fast
                <span className="ml-2 text-gray-400 border border-gray-400 rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">
                  i
                </span>
              </span>
            </div>
            <div className="bg-gray-100/5 h-14 flex items-center px-4 mb-1 rounded-lg">
              <span className="text-gray-300 font-medium flex items-center">
                Easy
                <span className="ml-2 text-gray-400 border border-gray-400 rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">
                  i
                </span>
              </span>
            </div>
            <div className="bg-gray-100/5 h-14 flex items-center px-4 mb-1 rounded-lg">
              <span className="text-gray-300 font-medium flex items-center">
                Customizable
                <span className="ml-2 text-gray-400 border border-gray-400 rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">
                  i
                </span>
              </span>
            </div>
            <div className="bg-gray-100/5 h-14 flex items-center px-4 mb-1 rounded-lg">
              <span className="text-gray-300 font-medium flex items-center">
                Scalable
                <span className="ml-2 text-gray-400 border border-gray-400 rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">
                  i
                </span>
              </span>
            </div>
            <div className="bg-gray-100/5 h-14 flex items-center px-4 mb-1 rounded-lg">
              <span className="text-gray-300 font-medium flex items-center">
                Authentic
                <span className="ml-2 text-gray-400 border border-gray-400 rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">
                  i
                </span>
              </span>
            </div>
            <div className="bg-gray-100/5 h-14 flex items-center px-4 mb-1 rounded-lg">
              <span className="text-gray-300 font-medium flex items-center">
                Ready-to-launch
                <span className="ml-2 text-gray-400 border border-gray-400 rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">
                  i
                </span>
              </span>
            </div>
          </div>

          {/* Second column - ugz.ai */}
          <div className="col-span-1 border border-[#8b5cf6] rounded-xl overflow-hidden relative z-20">
            <div className="h-20 flex items-center justify-center">
              <span className="text-[#8b5cf6] font-bold text-2xl">ugz.ai</span>
            </div>

            {/* Check marks */}
            <div className="h-14 flex items-center justify-center mb-1">
              <span className="bg-[#8b5cf6] rounded-full w-8 h-8 flex items-center justify-center text-white">
                ✓
              </span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="bg-[#8b5cf6] rounded-full w-8 h-8 flex items-center justify-center text-white">
                ✓
              </span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="bg-[#8b5cf6] rounded-full w-8 h-8 flex items-center justify-center text-white">
                ✓
              </span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="bg-[#8b5cf6] rounded-full w-8 h-8 flex items-center justify-center text-white">
                ✓
              </span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="bg-[#8b5cf6] rounded-full w-8 h-8 flex items-center justify-center text-white">
                ✓
              </span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="bg-[#8b5cf6] rounded-full w-8 h-8 flex items-center justify-center text-white">
                ✓
              </span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="bg-[#8b5cf6] rounded-full w-8 h-8 flex items-center justify-center text-white">
                ✓
              </span>
            </div>

            <div className="p-4 flex justify-center">
              <button className="w-full py-3 bg-[#8b5cf6] text-white font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-[#7c3aed] transition-all duration-200 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                Try ugz.ai now <span className="text-lg">›</span>
              </button>
            </div>
          </div>

          {/* Third column - Influencers */}
          <div className="col-span-1 relative z-10">
            <div className="h-20 flex items-center justify-center">
              <span className="text-gray-300 font-medium text-lg">
                Influencers
              </span>
            </div>

            {/* X marks */}
            <div className="h-14 flex items-center justify-center mb-1">
              <span className="text-gray-500 text-2xl">✕</span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="text-gray-500 text-2xl">✕</span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="text-gray-500 text-2xl">✕</span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="text-gray-500 text-2xl">✕</span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="text-gray-500 text-2xl">✕</span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="bg-[#8b5cf6] rounded-full w-8 h-8 flex items-center justify-center text-white">
                ✓
              </span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="text-gray-500 text-2xl">✕</span>
            </div>
          </div>

          {/* Fourth column - Production studio */}
          <div className="col-span-1 relative z-10">
            <div className="h-20 flex items-center justify-center">
              <span className="text-gray-300 font-medium text-lg">
                Production studio
              </span>
            </div>

            {/* Mixed marks */}
            <div className="h-14 flex items-center justify-center mb-1">
              <span className="text-gray-500 text-2xl">✕</span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="text-gray-500 text-2xl">✕</span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="text-gray-500 text-2xl">✕</span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="bg-[#8b5cf6] rounded-full w-8 h-8 flex items-center justify-center text-white">
                ✓
              </span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="bg-[#8b5cf6] rounded-full w-8 h-8 flex items-center justify-center text-white">
                ✓
              </span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="text-gray-500 text-2xl">✕</span>
            </div>

            <div className="h-14 flex items-center justify-center mb-1">
              <span className="bg-[#8b5cf6] rounded-full w-8 h-8 flex items-center justify-center text-white">
                ✓
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Talking Head Video Section */}
      <section className="max-w-[1200px] mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Talking Head Video
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-6">
              Our AI Actors add emotion and stick to scripts, totally changing 
              how you create interactive UGC content.
            </p>
          </div>
          
          <div className="md:w-1/2 flex gap-4">
            {/* Placeholder images */}
            <div className="w-1/3 aspect-[9/16] bg-gray-800 rounded-xl"></div>
            <div className="w-1/3 aspect-[9/16] bg-gray-800 rounded-xl"></div>
            <div className="w-1/3 aspect-[9/16] bg-gray-800 rounded-xl"></div>
          </div>
        </div>
        
        {/* 100+ licensed creators section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-20">
          <div className="md:w-1/2 grid grid-cols-5 gap-2">
            {/* Placeholder avatar images */}
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-800 rounded-xl"></div>
            ))}
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              100+ licensed creators
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-6">
              Create videos with our top-tier creators without worrying about
              rights. You own the content—no extra fees, no hassle, full
              ownership guaranteed.
            </p>
          </div>
        </div>
        
        {/* Access to 29 languages section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Access to 29 languages
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-6">
              Speak to the world! Choose your language for UGC video
              content, reaching viewers everywhere.
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-3 gap-2">
            {/* Placeholder language selection boxes */}
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="bg-gray-800/50 py-3 rounded-lg flex items-center justify-center">
                <span className="text-gray-300 text-sm">Language</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-[1200px] mx-auto px-4 py-20">
        <h2 className="text-[40px] font-bold text-white text-center mb-16">
          Choose your plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="relative bg-[#151821] rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-[24px] font-bold text-white mb-4">Starter</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-[40px] font-bold text-white">$19</span>
              <span className="text-gray-400 ml-1">/month</span>
            </div>
            <p className="text-gray-400 mb-8">10 videos per month</p>
            <hr className="border-gray-700/50 mb-8" />

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>10 videos per
                month
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>All 200+ UGC
                avatars
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>Generate unlimited
                viral hooks
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>Create your own AI
                avatars
                <br />
                (25 images and 5 videos)
              </li>
              <li className="flex items-center text-gray-400">
                <span className="mr-3 text-red-500">✗</span>Publish to TikTok
              </li>
              <li className="flex items-center text-gray-400">
                <span className="mr-3 text-red-500">✗</span>Schedule/automate
                videos
              </li>
            </ul>

            {/* Starter Plan Button */}
            <button className="w-full py-3 bg-[#2a2d36] text-white font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-[#363a45] transition-all duration-200 shadow-[0_0_15px_rgba(42,45,54,0.3)]">
              Buy Now <span className="text-lg">›</span>
            </button>
          </div>

          {/* Growth Plan - Most Popular */}
          <div className="relative bg-[#151821] rounded-2xl p-8 border border-[#8b5cf6]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8b5cf6] text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <h3 className="text-[24px] font-bold text-white mb-4">Growth</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-[40px] font-bold text-white">$49</span>
              <span className="text-gray-400 ml-1">/month</span>
            </div>
            <p className="text-gray-400 mb-8">50 videos per month</p>
            <hr className="border-gray-700/50 mb-8" />

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>50 videos per
                month
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>All 200+ UGC
                avatars
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>Generate unlimited
                viral hooks
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>Create your own AI
                avatars
                <br />
                (100 images and 25 videos)
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>Publish to TikTok
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>Schedule/automate
                videos
              </li>
            </ul>

            {/* Growth Plan Button */}
            <button className="w-full py-3 bg-[#8b5cf6] text-white font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-[#7c3aed] transition-all duration-200 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              Buy Now <span className="text-lg">›</span>
            </button>
          </div>

          {/* Scale Plan */}
          <div className="relative bg-[#151821] rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-[24px] font-bold text-white mb-4">Scale</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-[40px] font-bold text-white">$95</span>
              <span className="text-gray-400 ml-1">/month</span>
            </div>
            <p className="text-gray-400 mb-8">150 videos per month</p>
            <hr className="border-gray-700/50 mb-8" />

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>150 videos per
                month
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>All 200+ UGC
                avatars
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>Generate unlimited
                viral hooks
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>Create your own AI
                avatars
                <br />
                (200 images and 50 videos)
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>Publish to TikTok
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-3 text-[#8b5cf6]">✓</span>Schedule/automate
                videos
              </li>
            </ul>

            {/* Scale Plan Button */}
            <button className="w-full py-3 bg-[#2a2d36] text-white font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-[#363a45] transition-all duration-200 shadow-[0_0_15px_rgba(42,45,54,0.3)]">
              Buy Now <span className="text-lg">›</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
