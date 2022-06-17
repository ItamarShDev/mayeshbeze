import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Socials from "~/components/Socials";
import styles from "~/styles/home.css";
export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};
export const loader: LoaderFunction = async ({ request }) => {
  const data = await fetch(
    "https://api.simplecast.com/podcasts/501e1883-e1f5-4815-9b7d-342e149fcdda"
  );
  const distribution = await fetch(
    "https://api.simplecast.com/podcasts/501e1883-e1f5-4815-9b7d-342e149fcdda/distribution_channels"
  );
  return json({
    ...(await data.json()),
    distribution: await distribution.json(),
  });
};
function DistributionChannels({ channels }) {
  return <div></div>;
}

export default function Index() {
  const data = useLoaderData();
  const { copyright, description, title, distribution } = data;
  return (
    <div className="about">
      <h1>על הפודקאסט</h1>
      <a href="https://mayeshbeze.com/">
        <h2>{title}</h2>
      </a>

      <p>{description}</p>
      <p>{copyright}</p>
      <DistributionChannels channels={distribution} />
      <Socials />
    </div>
  );
}
