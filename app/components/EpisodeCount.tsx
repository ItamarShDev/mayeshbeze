export default function EpisodeCount({ count }: { count: number }) {
  return (
    <div className="episode-count">
      <p>{count} פרקים</p>
    </div>
  );
}
