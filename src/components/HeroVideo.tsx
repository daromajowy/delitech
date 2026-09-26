import React, { useEffect, useRef, useState } from 'react';
import { IMAGES } from '../assets.ts';

const VIDEO_ID = 'EMsypeEXmUY';
const CLIP_START = 3;
const CLIP_END = 23;
const PLAYER_REVEAL_DELAY = 1000;
const API_URL = 'https://www.youtube.com/iframe_api';

type YouTubePlayer = {
  mute: () => void;
  setVolume: (volume: number) => void;
  loadVideoById: (clip: { videoId: string; startSeconds: number; endSeconds: number }) => void;
  playVideo: () => void;
  pauseVideo: () => void;
  getCurrentTime: () => number;
  getPlayerState: () => number;
  getIframe: () => HTMLIFrameElement;
  destroy: () => void;
};

type PlayerEvent = { target: YouTubePlayer; data?: number };
type YouTubeAPI = {
  Player: new (element: HTMLElement, options: {
    host: string;
    videoId: string;
    playerVars: Record<string, string | number>;
    events: {
      onReady: (event: PlayerEvent) => void;
      onStateChange: (event: PlayerEvent) => void;
      onError: () => void;
      onAutoplayBlocked: () => void;
    };
  }) => YouTubePlayer;
};
type YouTubeWindow = Window & {
  YT?: YouTubeAPI;
  onYouTubeIframeAPIReady?: () => void;
};

let apiPromise: Promise<YouTubeAPI> | undefined;

function loadYouTubeAPI(): Promise<YouTubeAPI> {
  const youtubeWindow = window as YouTubeWindow;
  if (youtubeWindow.YT?.Player) return Promise.resolve(youtubeWindow.YT);
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[src="' + API_URL + '"]');
    const script = existingScript ?? document.createElement('script');
    const previousReady = youtubeWindow.onYouTubeIframeAPIReady;

    const cleanup = () => {
      window.clearTimeout(timeout);
      script.removeEventListener('error', handleError);
      if (youtubeWindow.onYouTubeIframeAPIReady === handleReady) {
        youtubeWindow.onYouTubeIframeAPIReady = previousReady;
      }
    };
    const handleReady = () => {
      if (!youtubeWindow.YT?.Player) return;
      cleanup();
      resolve(youtubeWindow.YT);
      previousReady?.();
    };
    const handleError = () => {
      cleanup();
      if (!existingScript) script.remove();
      apiPromise = undefined;
      reject(new Error('YouTube player could not be loaded.'));
    };
    const timeout = window.setTimeout(handleError, 15000);

    youtubeWindow.onYouTubeIframeAPIReady = handleReady;
    script.addEventListener('error', handleError, { once: true });
    if (!existingScript) {
      script.src = API_URL;
      script.async = true;
      document.head.appendChild(script);
    }
  });

  return apiPromise;
}

export const HeroVideo = () => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
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
    setIsPlaying(false);
    if (reduceMotion || !hostRef.current) return;

    const host = hostRef.current;
    let disposed = false;
    let ready = false;
    let failed = false;
    let player: YouTubePlayer | undefined;
    let revealTimer: number | undefined;

    const hidePlayer = () => {
      window.clearTimeout(revealTimer);
      revealTimer = undefined;
      // Hide synchronously, before YouTube can paint its pause/replay overlay.
      host.classList.remove('hero-video__player--playing');
      setIsPlaying(false);
    };

    const revealPlayer = (target: YouTubePlayer) => {
      if (revealTimer !== undefined) return;
      // YouTube briefly animates its central icon even with controls disabled.
      revealTimer = window.setTimeout(() => {
        revealTimer = undefined;
        if (!disposed && !failed && !document.hidden && target.getPlayerState() === 1) {
          setIsPlaying(true);
        }
      }, PLAYER_REVEAL_DELAY);
    };

    const playClip = (target: YouTubePlayer) => {
      if (disposed || document.hidden) return;
      hidePlayer();
      target.mute();
      target.setVolume(0);
      // Reload both bounds on EVERY loop: seekTo() would discard endSeconds.
      target.loadVideoById({
        videoId: VIDEO_ID,
        startSeconds: CLIP_START,
        endSeconds: CLIP_END,
      });
    };

    const handleVisibility = () => {
      if (!ready || !player || disposed || failed) return;
      if (document.hidden) {
        hidePlayer();
        player.pauseVideo();
      } else if (player.getCurrentTime() < CLIP_START || player.getCurrentTime() >= CLIP_END) {
        playClip(player);
      } else {
        player.mute();
        player.playVideo();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    loadYouTubeAPI().then((youtube) => {
      if (disposed) return;
      // The API owns only this child, so destroying it is safe in React StrictMode.
      const mount = document.createElement('div');
      host.appendChild(mount);
      player = new youtube.Player(mount, {
        host: 'https://www.youtube-nocookie.com',
        videoId: VIDEO_ID,
        playerVars: {
          // Start from onReady, after muting, rather than risk audible autoplay.
          autoplay: 0,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          playsinline: 1,
          start: CLIP_START,
          end: CLIP_END,
          rel: 0,
          iv_load_policy: 3,
          origin: window.location.origin,
        },
        events: {
          onReady: ({ target }) => {
            if (disposed) return;
            ready = true;
            const iframe = target.getIframe();
            iframe.title = 'JUNG LS TOUCH — automatyka KNX';
            iframe.tabIndex = -1;
            iframe.setAttribute('aria-hidden', 'true');
            iframe.setAttribute('allow', 'autoplay; encrypted-media');
            iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
            playClip(target);
          },
          onStateChange: ({ target, data }) => {
            if (disposed || failed) return;
            if (data === 1) {
              target.mute();
              if (document.hidden) {
                hidePlayer();
                target.pauseVideo();
                return;
              }
              revealPlayer(target);
            } else if (data === 0 || (data === 2 && target.getCurrentTime() >= CLIP_END - 0.1)) {
              playClip(target);
            } else {
              hidePlayer();
            }
          },
          onError: () => {
            if (disposed) return;
            failed = true;
            hidePlayer();
          },
          onAutoplayBlocked: () => {
            if (!disposed) hidePlayer();
          },
        },
      });
    }).catch(() => {
      if (!disposed) hidePlayer();
    });

    return () => {
      disposed = true;
      window.clearTimeout(revealTimer);
      document.removeEventListener('visibilitychange', handleVisibility);
      player?.destroy();
      host.replaceChildren();
    };
  }, [reduceMotion]);

  return (
    <div className="hero-video" aria-hidden="true">
      <img
        src={IMAGES.heroDelitechArch}
        alt=""
        className="hero-video__poster"
        fetchPriority="high"
      />
      <div
        ref={hostRef}
        className={'hero-video__player' + (isPlaying ? ' hero-video__player--playing' : '')}
      />
    </div>
  );
};
