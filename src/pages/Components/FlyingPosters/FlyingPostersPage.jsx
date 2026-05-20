import FlyingPosters from "../../../features/Components/FlyingPosters/FlyingPosters";

export default function FlyingPostersPage() {
  const items = [
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/400/400?grayscale",
  ];

  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <FlyingPosters
        items={items}
        planeWidth={320}
        planeHeight={320}
        distortion={3}
        scrollEase={0.01}
        cameraFov={45}
        cameraZ={20}
      />
    </div>
  );
}
