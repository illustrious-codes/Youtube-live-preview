import { getEmbedUrl } from "../lib/youtube";

export default function VideoPlayer({ videoId }) {
  if (!videoId) {
    return (
      <div className="player player--empty">
        <p className="player__empty-title">Nothing playing yet</p>
        <p className="player__empty-text">
          Copy a live link, paste it above, and the stream will play right here.
        </p>
      </div>
    );
  }

  return (
    <div className="player">
      <iframe
        className="player__frame"
        src={getEmbedUrl(videoId)}
        title="YouTube live preview"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      />
    </div>
  );
}
