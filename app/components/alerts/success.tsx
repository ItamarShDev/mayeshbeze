import type { AlertProps } from "~/components/alerts/types";

export default function Success({ message }: AlertProps) {
  return (
    <div>
      <p>Success:</p>
      <p>{message}</p>
    </div>
  );
}
