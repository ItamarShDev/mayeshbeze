import Episode from "~/components/Episodes/Episode";
import type { EpisodeType } from "~/components/Episodes/types";

type Props = {
  episodes: EpisodeType[];
};
export default function Episodes({ episodes }: Props) {
  if (!episodes) {
    return null;
  }
  return (
    <>
      {episodes.map((episode: EpisodeType) => (
        <Episode key={episode.id} episode={episode} />
      ))}
    </>
  );
}
