import { useEffect } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

type VideoModalProps = {
  videoSrc: string;
  onClose: () => void;
};

export default function VideoModal({ videoSrc, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = originalOverflow; // geri yükle
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-full m-4"
        onClick={(e) => e.stopPropagation()} // içeriğe tıklanınca kapanmasın
      >
        <button
          className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors z-50 p-2"
          onClick={onClose}
          aria-label="Close Video"
        >
          <X size={32} />
        </button>

        <div className="relative pt-[56.25%] bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={videoSrc}
            title="Promotional Video"
            autoPlay
            controls
            playsInline
            loop
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>,
    document.body
  );
}
