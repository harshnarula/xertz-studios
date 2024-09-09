import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ThreeDArena from "../components/ThreeDArena";
import TwoDArena from "../components/TwoDArena";
import AiArena from "../components/AiArena";

export default function ArenaPage() {

    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div id="three-d-arena">
        <ThreeDArena />
      </div>
      <div id="two-d-arena">
        <TwoDArena />
      </div>
      <div id="ai-arena">
        <AiArena />
      </div>
    </>
  );
}
