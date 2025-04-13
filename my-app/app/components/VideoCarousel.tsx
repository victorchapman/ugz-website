"use client";

import MuxPlayer from "@mux/mux-player-react/lazy";
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
    playbackId,
  }: {
    videoId: string;
    videoSrc?: string;
    isPlaceholder?: boolean;
    gradientClass?: string;
    isMuted: boolean;
    onToggle: (id: string) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    playbackId?: string;
  }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const playerRef = useRef<HTMLMediaElement | null>(null);

    const handlePlayClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsPlaying(true);
    };

    const handleMuxPlayerClick = (e: React.MouseEvent) => {
      e.stopPropagation();

      // Access the underlying media element for playback control
      const mediaEl = playerRef.current;
      if (mediaEl) {
        if (isPaused) {
          mediaEl.play();
        } else {
          mediaEl.pause();
        }
        setIsPaused(!isPaused);
      }
    };

    return (
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

            {isPlaying && playbackId ? (
              <div className="w-full h-full" onClick={handleMuxPlayerClick}>
                <MuxPlayer
                  playbackId={playbackId}
                  streamType="on-demand"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  muted={isMuted}
                  autoPlay
                  loop
                  metadata={{
                    video_title: "UGZ Video",
                    viewer_user_id: videoId,
                  }}
                  onLoadedData={(e) => {
                    // Get the media element when the player loads
                    const target = e.target as HTMLMediaElement;
                    playerRef.current = target;
                  }}
                />
                {isPaused && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <span className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            ) : playbackId ? (
              <>
                <div className="w-full h-full">
                  <img
                    // src={`https://image.mux.com/${playbackId}/animated.gif?width=320&height=320&start=2&end=5&fps=15`}
                    // src={`https://image.mux.com/${playbackId}/thumbnail.png?time=5`}
                    src={`https://image.mux.com/${playbackId}/animated.gif?start=2&end=4`} // 5 and 7
                    alt="Video preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute inset-0 w-full h-full flex items-center justify-center z-20"
                    onClick={handlePlayClick}
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
                  </button>
                </div>
              </>
            ) : videoSrc ? (
              <>
                <VideoPlayer videoSrc={videoSrc} isMuted={isMuted} />
                <button
                  className="absolute inset-0 w-full h-full flex items-center justify-center z-20"
                  onClick={handlePlayClick}
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
                </button>
              </>
            ) : null}

            <AudioControl
              videoId={videoId}
              isMuted={isMuted}
              onToggle={onToggle}
            />
          </>
        )}
      </div>
    );
  }
);

VideoCard.displayName = "VideoCard";

export default function VideoCarousel() {
  // Define video data once to avoid recreating objects on re-render
  const videoItems = [
    {
      id: "ijgaiosjeiogjio",
      src: "https://img.ugz.ai/08aa3126705949b0a0904319c1eb3ecf (1).mp4",
      playbackId: "m8GRybxmZ1aJAbUXWCNAndWl302gxM7g6MvyJOpf4X1Y",
    },
    {
      id: "ogjeioaj",
      src: "https://img.ugz.ai/guy1.mp4",
      playbackId: "4UdpDA6CgLn2K02Bwlkpypd301n8zi02QXiXdcQQ00Dn3gw",
    },
    {
      id: "ogefhsoihge",
      src: "https://img.ugz.ai/girl1.mp4",
      playbackId: "f01nJJR0001eddwbXHuWBjBh42bz17jwPz9QoYaVJ01W100k",
    },
    {
      id: "gosiuoi",
      src: "https://img.ugz.ai/8mb.video-ApT-FBUfZW0j (1).mp4",
      playbackId: "pCpwsodxceAkHocVSKL8A4Otx02OCH801bYq9X1hxTmWY",
    },
    {
      id: "iogioeaj",
      src: "https://img.ugz.ai/aa242e38e1184f48a368b498002c86dc.mp4",
      playbackId: "WsxVwxsgr802POKjrgf8DSnZuKAb3VMLH01aM00fBRnsFU",
    },
    {
      id: "geoioegaoi",
      src: "https://img.ugz.ai/8mb.video-i5f-IwVLws4N.mp4",
      playbackId: "o2IZRzkr7md0189RphpekDMj4VumO2SQM2m4JFfbFcy4",
    },
    {
      id: "oigaeoijigj",
      src: "https://img.ugz.ai/girl3.mp4",
      playbackId: "Wfp82KRIbX2U1NaHDkpCWmPHOTT7J3F4wf9mzHSy02P8",
    },
    {
      id: "jgajeojgoiej",
      src: "https://img.ugz.ai/a5e1626464d94d2d9acca6649014ffbc.mp4",
      playbackId: "uHc5hTdVErhDlaMOK6zLUH1a648pkcbjtq8gSsksWx00",
    },
    {
      id: "hjasdfoijhf",
      src: "https://img.ugz.ai/girl2.mp4",
      playbackId: "fcubkczc0001P02jbm02GHrCJ8wz00C02xZ2a7GzOQEr3I1ZA",
    },
  ];

  // Create a state to track which videos are unmuted
  const [unmutedVideos, setUnmutedVideos] = useState<Record<string, boolean>>(
    () => {
      // Initialize with all videos unmuted by default
      const initialState: Record<string, boolean> = {};
      videoItems.forEach((video) => {
        initialState[video.id] = true;
        initialState[`dup-${video.id}`] = true; // Also set duplicates for the second set
      });
      return initialState;
    }
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

  // Define a proper type for placeholder items
  interface PlaceholderItem {
    id: string;
    gradient: string;
  }

  const placeholderItems: PlaceholderItem[] = [
    // {
    //   id: "video-1-iiofjeaio",
    //   gradient: "from-indigo-100/80 to-purple-100/80",
    // },
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

    // Calculate immediately/
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
    <div className="relative w-screen mx-auto left-1/2 right-1/2 -translate-x-1/2 py-8 overflow-hidden">
      {/* Two identical sets of items for seamless infinite scroll */}
      <div ref={carouselRef} className="flex py-4 items-center">
        {/* First complete set */}
        <div className="flex first-set">
          {videoItems.map((video) => (
            <VideoCard
              key={video.id}
              videoId={video.id}
              playbackId={video.playbackId}
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
              playbackId={video.playbackId}
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
      {/* <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white via-white/95 to-transparent pointer-events-none"></div> */}

      {/* <div className="grid grid-cols-8 gap-4">
        {videoItems.map((video) => (
          <VideoCard
            key={video.id}
            videoId={video.id}
            videoSrc={video.src}
            isMuted={true}
            onToggle={toggleAudio}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div> */}
    </div>
  );
}
