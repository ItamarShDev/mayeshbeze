import { Link, useLoaderData, useSearchParams } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import EpisodeCount from "~/components/EpisodeCount";
import type { EpisodeType } from "~/components/Episodes";
import Episodes from "~/components/Episodes";
import styles from "~/styles/feed.css";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const limit = url.searchParams.get("limit") || "5";
  let baseUrl =
    "https://api.simplecast.com/podcasts/501e1883-e1f5-4815-9b7d-342e149fcdda/episodes";
  if (limit) {
    baseUrl += `?limit=${limit}`;
  }
  const episodes = await fetch(baseUrl);
  const json = await episodes.json();
  return json;
};

export default function Feed() {
  const latestEpisodes = useLoaderData();
  const [searchParams] = useSearchParams();
  const limit = searchParams.get("limit") || "5";
  const { count, collection } = latestEpisodes;
  return (
    <div className="feed">
      <h1>פיד</h1>
      <EpisodeCount count={count} />
      <Episodes episodes={collection as EpisodeType[]} />
      <div className="more">
        <Link to={`/feed?limit=${parseInt(limit) + 5}`}>עוד, עוד!</Link>
      </div>
    </div>
  );
}
