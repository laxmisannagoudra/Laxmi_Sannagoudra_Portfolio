// Put your own recorded video at public/video/intro.mp4 to replace this animated intro.
function VideoIntro({ summary }) {
  return (
    <div className="intro-wrap">
      <div className="video-box">
        <video controls preload="metadata" poster="/images/video-poster.jpg">
          <source src="/video/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="glass about-text">
        <h3>Welcome to my portfolio</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default VideoIntro;
