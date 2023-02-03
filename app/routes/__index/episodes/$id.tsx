import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import type { EpisodeType } from "~/components/Episodes";
import Episode from "~/components/Episodes/Episode";
import styles from "~/styles/feed.css";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
  return {
    title: data.title,
    description: data.description,
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  const episodeId = params.id;
  const baseUrl = "https://api.simplecast.com/episodes/" + episodeId;
  const episode = await fetch(baseUrl);
  const json = await episode.json();
  return json as EpisodeType;
};

export default function Feed() {
  let episode = useLoaderData<EpisodeType>();
  console.log(episode);

  return (
    <div className="feed">
      <h1>{episode.title}</h1>
      <Episode episode={episode} />
    </div>
  );
}
