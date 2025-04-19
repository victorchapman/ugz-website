"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

// Import VideoCarousel dynamically with SSR disabled
const VideoCarousel = dynamic(() => import("./components/VideoCarousel"), {
  ssr: false,
});

export default function Home() {
  // Use client-side only rendering for the content
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.ugz.ai/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setShowConfetti(true);
        setEmail("");

        // Hide confetti after 5 seconds
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);
      } else {
        alert("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Only render the content on the client to avoid hydration errors
  if (!isMounted) {
    return null; // Return nothing during SSR
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-x-hidden relative flex flex-col">
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

      {/* Confetti overlay */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-grow w-full relative z-10">
        {/* Upper content with constrained width */}
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6 md:pt-38 sm:mb-8 overflow-hidden">
          {/* Main Heading Section */}
          <div className="text-center mb-8 px-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 break-words hyphens-auto leading-tight">
              Join the Waitlist
              <br className="my-1" />
              Get 10 Free AI UGC Videos
            </h1>
            <p className="text-base sm:text-lg md:text-lg text-slate-600 max-w-3xl mx-auto font-medium  break-words leading-relaxed">
              When we launch, creating UGC will be 98% cheaper, 10,000x faster
              (ready in minutes), speak 32 languages, and showcase any product —
              without a single creator.
            </p>
          </div>

          {/* Email Capture Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-md mx-auto text-left"
          >
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-4 py-3 rounded-lg bg-white/80 backdrop-blur-md border border-gray-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:cursor-pointer whitespace-nowrap disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
              </button>
            </div>
            <div className="mt-2 text-left self-start">
              <a
                className="text-gray-600 hover:text-gray-800 cursor-pointer text-xs sm:text-sm"
                href="https://tally.so/r/mKRBkz"
                target="_blank"
              >
                Can't Wait? Get Early Access Today
              </a>
            </div>
          </form>
        </div>

        {/* Full-width Video Carousel Section */}
        <div className="w-full max-w-none overflow-hidden">
          <VideoCarousel />
        </div>
      </div>

      {/* Footer Links - now part of the flex layout */}
      <footer className="w-full py-4 backdrop-blur-sm text-center mt-auto">
        <div className="flex justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500">
          <Link href="/terms" className="hover:text-blue-600 transition-colors">
            Terms
          </Link>
          <Link
            href="/privacy"
            className="hover:text-blue-600 transition-colors"
          >
            Privacy
          </Link>
          <a
            href="mailto:contact@ugz.ai"
            className="hover:text-blue-600 transition-colors"
          >
            Contact
          </a>
        </div>
      </footer>

      {/* Success Dialog */}
      <Dialog
        open={isSuccess}
        onClose={() => setIsSuccess(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <Dialog.Title className="text-xl font-medium text-gray-900 mb-2">
              Thank you for joining!
            </Dialog.Title>
            <Dialog.Description className="text-gray-600 mb-4">
              We've added you to our waitlist. You'll be among the first to know
              when we launch!
            </Dialog.Description>
            <button
              onClick={() => setIsSuccess(false)}
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-lg transition-all duration-300"
            >
              Got it
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
