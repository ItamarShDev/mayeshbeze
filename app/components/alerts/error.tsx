import type { AlertProps } from "~/components/alerts/types";

export default function Error({ message }: AlertProps) {
  return (
    <div>
      <p>Error:</p>
      <p>{message}</p>
    </div>
  );
}
