import type { EpisodeType } from "~/components/Episodes/types";

export default function Episode({ episode }: { episode: EpisodeType }) {
  return (
    <div className="episode">
      <h2>{episode.title}</h2>
      <time dateTime={episode.published_at}>
        {new Date(episode.published_at).toLocaleString("he")}
      </time>
      <h4>{episode.description}</h4>
      <audio controls src={episode.enclosure_url} />
    </div>
  );
}
