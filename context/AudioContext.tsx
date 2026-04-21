"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AudioContextType {
  canPlayAudio: boolean;
  setCanPlayAudio: (value: boolean) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [canPlayAudio, setCanPlayAudio] = useState(false);

  return (
    <AudioContext.Provider value={{ canPlayAudio, setCanPlayAudio }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return context;
}