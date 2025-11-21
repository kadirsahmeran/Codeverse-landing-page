import { useState } from "react";
import { PlayCircle } from "lucide-react";
import VideoModal from "./VideoModal";

type VideoTriggerProps = {
  videoSrc: string;
  label?: string;
  iconSize?: number;
  className?: string;
}

export default function VideoTrigger({
  videoSrc,
  label = "Watch Video",
  iconSize = 20,
  className = "",
}: VideoTriggerProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsVideoOpen(true)}
        className={`flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group cursor-pointer ${className}`}
        aria-label="Play Video"
      >
        <PlayCircle
          className={`transition-transform group-hover:scale-105`}
          size={iconSize}
        />
        {label && <span className="text-lg font-medium tracking-wide">{label}</span>}
      </button>

      {isVideoOpen && (
        <VideoModal
          videoSrc={videoSrc}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </>
  );
}
