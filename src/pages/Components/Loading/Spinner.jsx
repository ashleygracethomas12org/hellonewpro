import { LoaderIcon } from "lucide-react";

function Spinner({ className = "", ...props }) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={className}
      style={{
        animation: "spin 1s linear infinite",
      }}
      {...props}
    />
  );
}

export { Spinner };