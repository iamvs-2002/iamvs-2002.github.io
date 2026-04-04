import type { PortfolioVideo } from "../data/portfolio";

type EmbedVideoProps = {
  video: PortfolioVideo;
  /** Used for iframe title / video aria-label */
  label: string;
  className?: string;
};

function embedSrc(video: PortfolioVideo): string | null {
  if (video.kind === "youtube") {
    const id = video.id.replace(/[^a-zA-Z0-9_-]/g, "");
    if (!id) return null;
    return `https://www.youtube-nocookie.com/embed/${id}`;
  }
  if (video.kind === "vimeo") {
    const id = video.id.replace(/\D/g, "");
    if (!id) return null;
    return `https://player.vimeo.com/video/${id}`;
  }
  return null;
}

/**
 * Responsive 16:9 embed for YouTube / Vimeo, or HTML5 video for files under `public/`.
 */
export default function EmbedVideo({
  video,
  label,
  className = "",
}: EmbedVideoProps) {
  const frameTitle = `${label} — video`;

  if (video.kind === "file") {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-xl bg-black ring-1 ring-gray-200/80 ${className}`}
      >
        <video
          className="aspect-video w-full object-contain"
          controls
          playsInline
          preload="metadata"
          poster={video.poster}
          aria-label={frameTitle}
        >
          <source src={video.src} />
        </video>
      </div>
    );
  }

  const src = embedSrc(video);
  if (!src) return null;

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-xl bg-black ring-1 ring-gray-200/80 ${className}`}
    >
      <iframe
        className="absolute inset-0 h-full w-full border-0"
        src={src}
        title={frameTitle}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
