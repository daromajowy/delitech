import React, { useEffect, useRef, useState } from 'react';
import heroVideoUrl from '../assets/jung-ls-touch-3-23.mp4';

// JUNG LS TOUCH (EMsypeEXmUY), 00:03–00:23, with the audio track removed.
export const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    const syncPlayback = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.muted = true;
        void video.play().catch(() => {
          // Leave the video without controls if the browser blocks autoplay.
        });
      }
    };

    document.addEventListener('visibilitychange', syncPlayback);
    syncPlayback();
    return () => {
      document.removeEventListener('visibilitychange', syncPlayback);
      video.pause();
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div className="hero-video" aria-hidden="true">
      <video
        ref={videoRef}
        className="hero-video__media"
        src={heroVideoUrl}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        preload="auto"
        tabIndex={-1}
      />
    </div>
  );
};
