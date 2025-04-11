"use client";

import { useState, useRef, memo, useEffect, useCallback } from "react";

// Audio control button component
const AudioControl = memo(
  ({
    videoId,
    isMuted,
    onToggle,
  }: {
    videoId: string;
    isMuted: boolean;
    onToggle: (id: string) => void;
  }) => {
    return (
      <button
        className="audio-control"
        onClick={(e) => {
          e.stopPropagation();
          onToggle(videoId);
        }}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          // Muted icon (volume off)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        ) : (
          // Unmuted icon (volume on)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
        )}
      </button>
    );
  }
);

AudioControl.displayName = "AudioControl";

// Video component to prevent re-renders
const VideoPlayer = memo(
  ({ videoSrc, isMuted }: { videoSrc: string; isMuted: boolean }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        key={videoSrc} // Stable key based on source
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";

// Video card component
const VideoCard = memo(
  ({
    videoId,
    videoSrc,
    isPlaceholder = false,
    gradientClass = "from-blue-100/80 to-indigo-100/80",
    isMuted,
    onToggle,
    onMouseEnter,
    onMouseLeave,
  }: {
    videoId: string;
    videoSrc?: string;
    isPlaceholder?: boolean;
    gradientClass?: string;
    isMuted: boolean;
    onToggle: (id: string) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }) => (
    <div
      className="video-card min-w-[250px] md:min-w-[280px] aspect-[9/16] mx-3 
              rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/30
              backdrop-blur-sm overflow-hidden relative
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]
              hover:border-white/50 hover:z-20"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPlaceholder ? (
        <div
          className={`w-full h-full bg-gradient-to-b ${gradientClass} flex items-center justify-center`}
        >
          <span className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </span>
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none opacity-60"></div>
          {videoSrc && <VideoPlayer videoSrc={videoSrc} isMuted={isMuted} />}
          <AudioControl
            videoId={videoId}
            isMuted={isMuted}
            onToggle={onToggle}
          />
        </>
      )}
    </div>
  )
);

VideoCard.displayName = "VideoCard";

export default function VideoCarousel() {
  // Create a state to track which videos are unmuted
  const [unmutedVideos, setUnmutedVideos] = useState<Record<string, boolean>>(
    {}
  );

  // State to track whether any video is being hovered
  const [isPaused, setIsPaused] = useState(false);

  // Ref for the carousel container
  const carouselRef = useRef<HTMLDivElement>(null);

  // State to store the current translation value
  const [position, setPosition] = useState(0);

  // Animation speed (pixels per second)
  const speed = 30;

  // Width of the content (total width of all items)
  const contentWidthRef = useRef(0);

  // Animation timestamp and position reference
  const animationRef = useRef<{
    lastTimestamp: number;
    position: number;
    forceStop: boolean;
  }>({
    lastTimestamp: 0,
    position: 0,
    forceStop: false,
  });

  // Define video data once to avoid recreating objects on re-render
  const videoItems = [
    { id: "video-1-1", src: "https://img.ugz.ai/girl2.mp4" },
    { id: "video-1-2", src: "https://img.ugz.ai/guy1.mp4" },
    { id: "video-1-0", src: "https://img.ugz.ai/girl1.mp4" },
    {
      id: "video-1-4",
      src: "https://img.ugz.ai/8mb.video-ApT-FBUfZW0j (1).mp4",
    },
    {
      id: "video-1-5",
      src: "https://img.ugz.ai/aa242e38e1184f48a368b498002c86dc.mp4",
    },
    { id: "video-1-3", src: "https://img.ugz.ai/girl3.mp4" },
    {
      id: "video-1-6",
      src: "https://img.ugz.ai/a5e1626464d94d2d9acca6649014ffbc.mp4",
    },
  ];

  const placeholderItems = [
    { id: "video-1-5", gradient: "from-rose-100/80 to-pink-100/80" },
    { id: "video-1-6", gradient: "from-indigo-100/80 to-purple-100/80" },
    // { id: "video-1-7", gradient: "from-sky-100/80 to-blue-100/80" },
  ];

  // Calculate the content width on mount and when window resizes
  useEffect(() => {
    const calculateWidth = () => {
      if (carouselRef.current) {
        // Get the width of the first set (not the entire carousel)
        const firstSet = carouselRef.current.querySelector(
          ".first-set"
        ) as HTMLElement;
        if (firstSet) {
          // Store the width of the first set for perfect looping
          contentWidthRef.current = firstSet.offsetWidth;
        }
      }
    };

    // Calculate immediately
    calculateWidth();

    // Also calculate after a short delay to ensure all resources are loaded
    const timer = setTimeout(calculateWidth, 500);

    // Recalculate on window resize
    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth);
      clearTimeout(timer);
    };
  }, []);

  // Animation loop using requestAnimationFrame
  const animate = useCallback(
    (timestamp: number) => {
      if (!animationRef.current.lastTimestamp) {
        animationRef.current.lastTimestamp = timestamp;
      }

      const elapsed = timestamp - animationRef.current.lastTimestamp;

      // Check both isPaused state and the forceStop flag
      if (!isPaused && !animationRef.current.forceStop) {
        // Move by a proportional amount based on elapsed time
        const pixelsToMove = (elapsed / 1000) * speed;

        // Update position
        animationRef.current.position -= pixelsToMove;

        // Check if we need to reset position for seamless looping
        // Use the measured width of the first set from contentWidthRef
        if (
          Math.abs(animationRef.current.position) >= contentWidthRef.current
        ) {
          // Instead of jumping back to 0, add the width to create a perfect loop
          // This makes it appear as if the second set becomes the first set
          animationRef.current.position += contentWidthRef.current;
        }

        // Update the DOM immediately without any transition
        if (carouselRef.current) {
          carouselRef.current.style.transform = `translateX(${animationRef.current.position}px)`;
        }
      }

      animationRef.current.lastTimestamp = timestamp;
      requestAnimationFrame(animate);
    },
    [isPaused, speed]
  );

  // Start the animation
  useEffect(() => {
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [animate]);

  // Function to toggle audio for a specific video
  const toggleAudio = (videoId: string) => {
    setUnmutedVideos((prev) => ({
      ...prev,
      [videoId]: !prev[videoId],
    }));
  };

  // Event handlers for mouse interactions - ensure immediate pause with no delay
  const handleMouseEnter = () => {
    // Store the exact current position before pausing
    animationRef.current.lastTimestamp = 0; // Reset timestamp to prevent jumps
    setIsPaused(true);

    // Force immediate update of isPaused state by using a flag reference
    // This prevents any animation updates before React state updates
    animationRef.current.forceStop = true;

    // Immediately update to ensure no transition delay
    if (carouselRef.current) {
      // Apply the exact current position to prevent any additional movement
      const currentPosition = animationRef.current.position;
      carouselRef.current.style.transform = `translateX(${currentPosition}px)`;
    }
  };

  const handleMouseLeave = () => {
    // Remove force stop flag
    animationRef.current.forceStop = false;
    // Reset timestamp to prevent jumps when resuming
    animationRef.current.lastTimestamp = 0;
    setIsPaused(false);
  };

  return (
    <div className="relative w-screen mx-auto left-1/2 right-1/2 -translate-x-1/2 py-16 overflow-hidden">
      {/* Two identical sets of items for seamless infinite scroll */}
      <div ref={carouselRef} className="flex py-4 items-center">
        {/* First complete set */}
        <div className="flex first-set">
          {videoItems.map((video) => (
            <VideoCard
              key={video.id}
              videoId={video.id}
              videoSrc={video.src}
              isMuted={!unmutedVideos[video.id]}
              onToggle={toggleAudio}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}

          {placeholderItems.map((item) => (
            <VideoCard
              key={item.id}
              videoId={item.id}
              isPlaceholder
              gradientClass={item.gradient}
              isMuted={true}
              onToggle={toggleAudio}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>

        {/* Second identical set - must be exactly the same for perfect loop */}
        <div className="flex second-set">
          {videoItems.map((video) => (
            <VideoCard
              key={`dup-${video.id}`}
              videoId={`dup-${video.id}`}
              videoSrc={video.src}
              isMuted={!unmutedVideos[`dup-${video.id}`]}
              onToggle={toggleAudio}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}

          {placeholderItems.map((item) => (
            <VideoCard
              key={`dup-${item.id}`}
              videoId={`dup-${item.id}`}
              isPlaceholder
              gradientClass={item.gradient}
              isMuted={true}
              onToggle={toggleAudio}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>

      {/* Gradient overlays for fade effect - enhanced with deeper fade */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white via-white/95 to-transparent pointer-events-none"></div>
    </div>
  );
}
