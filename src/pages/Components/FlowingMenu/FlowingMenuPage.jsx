import FlowingMenu from "../../../features/Components/FlowingMenu/FlowingMenu";

const demoItems = [
  {
    link: "#",
    text: "Mojave",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "Sonoma",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Monterey",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Sequoia",
    image: "https://picsum.photos/600/400?random=4",
  },
];

export default function FlowingMenuPage() {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <FlowingMenu
        items={demoItems}
        speed={15}
        textColor="#ffffff"
        bgColor="#120F17"
        marqueeBgColor="#ffffff"
        marqueeTextColor="#120F17"
        borderColor="#ffffff"
      />
    </div>
  );
}