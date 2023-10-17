import { useCallback, useState } from "react";

export function useVideoState(shouldAutoStart: boolean) {
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoPaused, setVideoPaused] = useState(!shouldAutoStart);

  return {
    videoLoading,
    videoPaused,
    setVideoPlaying: useCallback(() => setVideoPaused(false), []),
    setVideoPaused: useCallback(() => setVideoPaused(true), []),
    setVideoLoading: useCallback(() => setVideoLoading(false), []),
    setVideoNotLoading: useCallback(() => setVideoLoading(false), []),
  };
}
