import type { EpisodeType } from "~/components/Episodes/types";

export default function Episode({ episode }: { episode: EpisodeType }) {
  return (
    <div className="episode">
      <h2>{episode.title}</h2>
      <p>{episode.description}</p>
      <audio controls src={episode.enclosure_url} />
    </div>
  );
}
