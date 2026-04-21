"use client";

import { useState, useRef, useEffect } from "react";

function MusicNoteIcon({ className, animated }: { className?: string; animated?: boolean }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      style={animated ? { animation: "bounce 0.6s ease-in-out infinite alternate" } : undefined}
    >
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      <style>{`
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-2px); }
        }
      `}</style>
    </svg>
  );
}

function MusicNotesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      <path d="M19 10v7h2v-7h-2zm-3 3v4h2v-4h-2z" />
    </svg>
  );
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasInteracted = useRef(false);

  // Listen for custom event to start playback (from WelcomeCard)
  useEffect(() => {
    const handleStartAudio = () => {
      if (audioRef.current && !hasInteracted.current) {
        audioRef.current.loop = true;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          hasInteracted.current = true;
        }).catch(() => {
          // Autoplay blocked - show play button
        });
      }
    };

    window.addEventListener("start-audio", handleStartAudio);
    return () => window.removeEventListener("start-audio", handleStartAudio);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/musica.mp3" />
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-rose-500/90 hover:bg-rose-600/90 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? (
            <MusicNotesIcon className="w-6 h-6 text-white" />
          ) : (
            <MusicNoteIcon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    </>
  );
}
