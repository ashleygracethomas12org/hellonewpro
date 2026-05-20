import CardSwap, { Card } from "../../../features/Components/CardSwap/CardSwap";

export default function CardSwapPage() {
  return (
    <div
      style={{
        height: "600px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={3500}
        pauseOnHover={false}
      >
        <Card>
          <h3>Card 1</h3>
          <p>Your content here</p>
        </Card>

        <Card>
          <h3>Card 2</h3>
          <p>Your content here</p>
        </Card>

        <Card>
          <h3>Card 3</h3>
          <p>Your content here</p>
        </Card>
      </CardSwap>
    </div>
  );
}