"use client";

import React, { useEffect, useRef } from "react";
import { createScene1 } from "./scenes/scene";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const mount = containerRef.current;
    const { renderer, camera, cube, circle, triangle } = createScene1(mount);

    // set initial camera aspect to match container
    if (camera) {
      const iw = mount.clientWidth || 1;
      const ih = mount.clientHeight || 1;
      camera.aspect = iw / ih;
      camera.updateProjectionMatrix();
    }

    const handler = (e: Event) => {
      const select = (e as CustomEvent).detail;
      if (!cube || !circle || !triangle) return;
      cube.visible = select === "cube";
      circle.visible = select === "sphere";
      triangle.visible = select === "prisme";
    };

    window.addEventListener("selectObject", handler as EventListener);

    // ResizeObserver to keep renderer size in sync with container
    const ro = new ResizeObserver(() => {
      const w = mount.clientWidth || 300;
      const h = mount.clientHeight || 150;
      renderer.setSize(w, h);
      if (camera) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
    });
    ro.observe(mount);

    return () => {
      window.removeEventListener("selectObject", handler as EventListener);
      ro.disconnect();
      // clean up renderer DOM
      try {
        if (renderer && renderer.domElement && mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
        if (renderer) renderer.dispose();
      } catch {
        // ignore cleanup errors
      }
    };
  }, []);

  return <div style={{ width: "100%", height: "100%" }} ref={containerRef} />;
}
