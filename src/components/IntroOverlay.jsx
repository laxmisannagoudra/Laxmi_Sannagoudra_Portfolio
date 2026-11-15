import { useEffect, useRef, useState } from "react";

// Full-screen intro that plays first when the portfolio opens.
// useState remembers if the sound is muted; useRef gives us access to the <video> element.
function IntroOverlay({ onClose }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // stop page scrolling behind the intro
    const v = videoRef.current;
    v.muted = false;
    // Browsers may block autoplay with sound. If so, start muted and show a "Tap for sound" button.
    v.play().catch(() => {
      v.muted = true;
      setMuted(true);
      v.play().catch(() => {});
    });
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const toggleSound = () => {
    const v = videoRef.current;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) v.play();
  };

  return (
    <div className="overlay">
      <video
        ref={videoRef}
        src="/video/intro.mp4"
        poster="/images/video-poster.jpg"
        playsInline
        onEnded={onClose}
      />
      <div className="ov-bar">
        <button className={muted ? "btn pulse" : "btn ghost"} onClick={toggleSound}>
          {muted ? "🔊 Tap for sound" : "🔇 Mute"}
        </button>
        <button className="btn ghost" onClick={onClose}>Skip & enter portfolio →</button>
      </div>
    </div>
  );
}

export default IntroOverlay;
