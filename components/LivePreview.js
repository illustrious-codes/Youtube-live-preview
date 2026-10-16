"use client";

import { useState } from "react";
import LinkForm from "./LinkForm";
import VideoPlayer from "./VideoPlayer";
import { getYouTubeId } from "../lib/youtube";

const INVALID_MSG =
  "That doesn't look like a YouTube link. Copy the full link from the YouTube share button and try again.";

export default function LivePreview() {
  const [link, setLink] = useState("");
  const [videoId, setVideoId] = useState(null);
  const [error, setError] = useState("");

  function load(value) {
    const id = getYouTubeId(value);
    if (!id) {
      setVideoId(null);
      setError(value.trim() ? INVALID_MSG : "Paste a YouTube link first.");
      return;
    }
    setError("");
    setVideoId(id);
  }

  function handleSubmit(e) {
    e.preventDefault();
    load(link);
  }

  async function handlePaste() {
    try {
      const text = await navigator.clipboard.readText();
      setLink(text);
      load(text);
    } catch {
      setError(
        "Couldn't read your clipboard. Paste the link into the box manually."
      );
    }
  }

  function handleClear() {
    setLink("");
    setVideoId(null);
    setError("");
  }

  return (
    <section className="preview">
      <LinkForm
        value={link}
        onChange={setLink}
        onSubmit={handleSubmit}
        onPaste={handlePaste}
        onClear={handleClear}
        error={error}
      />
      <VideoPlayer videoId={videoId} />
      <p className="preview__note">
        Some streams can't be embedded because the owner has turned it off. If
        the player shows an error, open the link on YouTube instead.
      </p>
    </section>
  );
}
