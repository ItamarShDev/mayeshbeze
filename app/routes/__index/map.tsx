import styles from "~/styles/map.css";
export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};
export default function Index() {
  return (
    <section>
      <iframe
        title="Episodes on the map"
        className="map"
        src="https://www.google.com/maps/d/u/0/embed?mid=11wUyQ80tTvWnq0dZgP5b_HooBn_Wz9A&ehbc=2E312F"
      ></iframe>
      <p>
        Credit to{" "}
        <a href="https://www.facebook.com/groups/236752417949793/user/722771450">
          Oded Berger
        </a>
      </p>
    </section>
  );
}
