export {};

declare global {
  interface Window {
    __bgm?: {
      audio: HTMLAudioElement;
      play: () => Promise<void>;
      pause: () => void;
      isPlaying: () => boolean;
    };
  }
}