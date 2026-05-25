import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";

import Antigravity from "./pages/Animations/Antigravity/AntigravityPage.jsx";
import LogoLoopPage from "./pages/Animations/LogoLoop/LogoLoopPage.jsx";
import GhostCursor from "./pages/Animations/Cursor/GhostCursor/GhostCursorPage.jsx";
import SplashCursor from "./pages/Animations/Cursor/SplashCursor/SplashCursorPage.jsx";
import FlyingPosters from "./pages/Components/FlyingPosters/FlyingPostersPage.jsx";
import CardSwapPage from "./pages/Components/CardSwap/CardSwapPage.jsx";
import FlowingMenuPage from "./pages/Components/FlowingMenu/FlowingMenuPage.jsx";
import DotFieldPage from "./pages/Backgrounds/DotField/DotFieldPage.jsx";
import BounceCardsPage from "./pages/Components/BounceCards/BounceCardsPage.jsx";
import InfiniteMenuPage from "./pages/Components/InfiniteMenu/InfiniteMenuPage.jsx";
import DomeGalleryPage from "./pages/Components/DomeGallery/DomeGalleryPage.jsx";
import ChromaGridPage from "./pages/Components/ChromaGrid/ChromaGridPage.jsx";
import StackPage from "./pages/Components/Stack/StackPage.jsx";
import CircularGalleryPage from "./pages/Components/CircularGallery/CircularGalleryPage.jsx";
import Loading from "./pages/Components/Loading/Loading.jsx";
import ScrollFloatPage from "./pages/Components/ScrollFloat/ScrollFloatPage.jsx";
import FallingTextPage from "./pages/Components/FallingText/FallingTextPage.jsx";
import PixelTransitionPage from "./pages/Animations/PixelTransition/PixelTransitionPage.jsx";

const FEATURES = [
  { path: "/antigravity", label: "Antigravity", badge: "NEW" },
  { path: "/logoloop", label: "Logo Loop", badge: "NEW" },
  { path: "/ghostcursor", label: "Ghost Cursor", badge: "NEW" },
  { path: "/splashcursor", label: "Splash Cursor", badge: "NEW" },
  { path: "/flyingposters", label: "Flying Posters", badge: "NEW" },
  { path: "/cardswap", label: "Card Swap", badge: "NEW" },
  { path: "/flowingmenu", label: "Flowing Menu", badge: "NEW" },
  { path: "/dotfield", label: "Dot Field", badge: "NEW" },
  { path: "/bouncecard", label: "Bounce Card", badge: "NEW" },
  { path: "/infinitemenu", label: "Infinite Menu", badge: "NEW" },
  { path: "/domegallery", label: "Dome Gallery", badge: "NEW" },
  { path: "/chromagrid", label: "Chroma Grid", badge: "NEW" },
  { path: "/stack", label: "Stack", badge: "NEW" },
  { path: "/circulargallery", label: "Circular Gallery", badge: "NEW" },
  { path: "/loading", label: "Loading", badge: "NEW" },
  { path: "/scrollfloat", label: "Scroll Float", badge: "NEW" },

  { path: "/fallingtext", label: "Falling Text", badge: "NEW" },
  { path: "/pixeltransition", label: "Pixel Transition", badge: "NEW" },










];

export default function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          {FEATURES.map((f) => (
            <NavLink key={f.path} to={f.path}>
              {f.label}
              <span className="badge">{f.badge}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/antigravity" element={<Antigravity />} />
          <Route path="/logoloop" element={<LogoLoopPage />} />
          <Route path="/ghostcursor" element={<GhostCursor />} />
          <Route path="/splashcursor" element={<SplashCursor />} />
          <Route path="/flyingposters" element={<FlyingPosters />} />
          <Route path="/cardswap" element={<CardSwapPage />} />
          <Route path="/flowingmenu" element={<FlowingMenuPage />} />
          <Route path="/dotfield" element={<DotFieldPage />} />
          <Route path="/bouncecard" element={<BounceCardsPage />} />
          <Route path="/infinitemenu" element={<InfiniteMenuPage />} />
          <Route path="/domegallery" element={<DomeGalleryPage />} />
          <Route path="/chromagrid" element={<ChromaGridPage />} />
          <Route path="/stack" element={<StackPage />} />
          <Route path="/circulargallery" element={<CircularGalleryPage />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/scrollfloat" element={<ScrollFloatPage />} />
          <Route path="/fallingtext" element={<FallingTextPage />} />
          <Route path="/pixeltransition" element={<PixelTransitionPage />} />









          



        </Routes>
      </main>
    </div>
  );
}
