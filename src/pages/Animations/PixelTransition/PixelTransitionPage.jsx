import React from "react";
import PixelTransition from "../../../features/Animations/PixelTransition/PixelTransition";

const PixelTransitionPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-10">
      <PixelTransition
        firstContent={
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="cat"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        }
        secondContent={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              backgroundColor: "#111",
            }}
          >
            <p
              style={{
                fontWeight: 900,
                fontSize: "3rem",
                color: "#fff",
              }}
            >
              Meow!
            </p>
          </div>
        }
        gridSize={8}
        pixelColor="#ffffff"
        once={false}
        animationStepDuration={0.4}
      />
    </div>
  );
};

export default PixelTransitionPage;