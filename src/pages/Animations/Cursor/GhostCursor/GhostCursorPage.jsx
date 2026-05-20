import GhostCursor from "../../../../features/Animations/Cursor/GhostCursor/GhostCursor";

const GhostCursorPage = () => {
  return (
    <div style={{ height: 600, position: "relative" }}>
      <GhostCursor
        color="#B497CF"
        brightness={2}
        edgeIntensity={0}
        trailLength={50}
        inertia={0.5}
        grainIntensity={0.05}
        bloomStrength={0.1}
        bloomRadius={1}
        bloomThreshold={0.025}
        fadeDelayMs={1000}
        fadeDurationMs={1500}
      />
    </div>
  );
};

export default GhostCursorPage;