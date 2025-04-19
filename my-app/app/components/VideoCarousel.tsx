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
    currentlyPlayingId,
    setCurrentlyPlayingId,
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
    currentlyPlayingId: string | null;
    setCurrentlyPlayingId: (id: string | null) => void;
  }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const playerRef = useRef<HTMLMediaElement | null>(null);

    // Check if this video should be playing or paused based on currentlyPlayingId
    useEffect(() => {
      const mediaEl = playerRef.current;
      if (mediaEl && isPlaying) {
        if (currentlyPlayingId !== videoId) {
          mediaEl.pause();
          setIsPaused(true);
        }
      }
    }, [currentlyPlayingId, videoId, isPlaying]);

    const handlePlayClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsPlaying(true);
      setCurrentlyPlayingId(videoId);
    };

    const handleMuxPlayerClick = (e: React.MouseEvent) => {
      e.stopPropagation();

      // Access the underlying media element for playback control
      const mediaEl = playerRef.current;
      if (mediaEl) {
        if (isPaused) {
          mediaEl.play();
          setIsPaused(false);
          setCurrentlyPlayingId(videoId);
        } else {
          mediaEl.pause();
          setIsPaused(true);
          setCurrentlyPlayingId(null);
        }
      }
    };

    return (
      <div
        className="video-card min-w-[250px] md:min-w-[280px] aspect-[9/16] mx-3 
                rounded-2xl shadow-sm border border-white/30
                backdrop-blur-sm overflow-hidden relative cursor-pointer"
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
                    src={`https://image.mux.com/${playbackId}/animated.gif?start=4&end=6`} // 5 and 7
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
      playbackId: "OMBGOllOd3SgyBTtKk45QbBcUekqdY701CI86Z8OyWhM",
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
    // {
    //   id: "jgajeojgoiej",
    //   src: "https://img.ugz.ai/a5e1626464d94d2d9acca6649014ffbc.mp4",
    //   playbackId: "uHc5hTdVErhDlaMOK6zLUH1a648pkcbjtq8gSsksWx00",
    // },
    // {
    //   id: "hjasdfoijhf",
    //   src: "https://img.ugz.ai/girl2.mp4",
    //   playbackId: "fcubkczc0001P02jbm02GHrCJ8wz00C02xZ2a7GzOQEr3I1ZA",
    // },
  ];

  // State to track the currently playing video ID
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(
    null
  );

  // Grid view toggle state
  const [showGrid, setShowGrid] = useState(false);

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

      // Always animate regardless of isPaused state - only respect forceStop
      if (!animationRef.current.forceStop) {
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
    [speed] // Remove 'isPaused' from dependencies
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
    // We no longer pause the carousel on hover
    // But keep the function for other potential uses like video controls
  };

  const handleMouseLeave = () => {
    // We no longer unpause the carousel on mouse leave
    // But keep the function for other potential uses like video controls
  };

  const toggleGridView = () => {
    const newShowGrid = !showGrid;
    setShowGrid(newShowGrid);

    // Reset position when switching to grid view
    if (newShowGrid) {
      // Reset animation position when switching to grid
      animationRef.current.position = 0;
      // Only stop animation when in grid view
      animationRef.current.forceStop = true;

      // Reset transform directly on the carousel element
      if (carouselRef.current) {
        carouselRef.current.style.transform = "translateX(0)";
      }
    } else {
      // Resume animation when switching back to carousel
      animationRef.current.forceStop = false;
      animationRef.current.lastTimestamp = 0;
    }
  };

  return (
    <div className="relative w-screen mx-auto left-1/2 right-1/2 -translate-x-1/2 pb-24 overflow-hidden">
      {/* Toggle button - only visible on desktop */}
      <div className="hidden lg:flex justify-center">
        <button
          onClick={toggleGridView}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-gray-600 transition-all cursor-pointer
            ${
              showGrid
                ? "bg-gray-200/80 shadow-inner"
                : "bg-gray-100/70 hover:bg-gray-200/80 border-transparent"
            }`}
        >
          {showGrid ? (
            <>
              <span>View Carousel</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M21 12H3" />
                <path d="M12 3v18" />
              </svg>
            </>
          ) : (
            <>
              <span>View All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Mobile layout - 1 column grid */}
      <div className="sm:hidden grid grid-cols-1 gap-4 px-4">
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
            currentlyPlayingId={currentlyPlayingId}
            setCurrentlyPlayingId={setCurrentlyPlayingId}
          />
        ))}
      </div>

      {/* Tablet layout - 2 column grid */}
      <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4 px-4">
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
            currentlyPlayingId={currentlyPlayingId}
            setCurrentlyPlayingId={setCurrentlyPlayingId}
          />
        ))}
      </div>

      {/* Desktop layout - togglable between carousel and grid */}
      <div className="hidden lg:block mt-4">
        {/* Grid view - 4 columns */}
        {showGrid ? (
          <div className="grid grid-cols-4 gap-6 px-20 max-w-7xl mx-auto">
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
                currentlyPlayingId={currentlyPlayingId}
                setCurrentlyPlayingId={setCurrentlyPlayingId}
              />
            ))}
          </div>
        ) : (
          /* Carousel view */
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
                  currentlyPlayingId={currentlyPlayingId}
                  setCurrentlyPlayingId={setCurrentlyPlayingId}
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
                  currentlyPlayingId={currentlyPlayingId}
                  setCurrentlyPlayingId={setCurrentlyPlayingId}
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
                  currentlyPlayingId={currentlyPlayingId}
                  setCurrentlyPlayingId={setCurrentlyPlayingId}
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
                  currentlyPlayingId={currentlyPlayingId}
                  setCurrentlyPlayingId={setCurrentlyPlayingId}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
