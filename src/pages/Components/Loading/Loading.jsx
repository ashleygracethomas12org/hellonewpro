import React from "react";
import { Spinner } from "./Spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen gap-3">
      <Spinner className="w-10 h-10 text-blue-500" />
      <span>Loading...</span>

      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;