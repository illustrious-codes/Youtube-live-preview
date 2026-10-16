// Extracts the video ID from any common YouTube link (live, watch, youtu.be, embed, shorts)
export function getYouTubeId(input) {
  if (!input) return null;
  const text = input.trim();

  // Bare 11-character ID
  if (/^[\w-]{11}$/.test(text)) return text;

  let url;
  try {
    url = new URL(text.startsWith("http") ? text : `https://${text}`);
  } catch {
    return null;
  }

  const host = url.hostname.replace(/^www\.|^m\./, "");

  if (host === "youtu.be") {
    return url.pathname.slice(1).split("/")[0] || null;
  }

  if (host === "youtube.com" || host === "youtube-nocookie.com") {
    if (url.pathname === "/watch") return url.searchParams.get("v");
    const match = url.pathname.match(/^\/(live|embed|shorts|v)\/([\w-]{11})/);
    if (match) return match[2];
  }

  return null;
}

export function getEmbedUrl(id) {
  return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
}
