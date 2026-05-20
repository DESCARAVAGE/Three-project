"use client"; // directive Next.js : rendre ce composant côté client

import { useEffect, useRef } from "react"; // importe React et les hooks utilisés
import { createScene1 } from "./scenes/scene"; // importe la fonction qui initialise la scène Three.js
//

// composant React affichant la scène 3D
export default function ThreeScene() {
  // référence DOM du conteneur pour le renderer
  const containerRef = useRef<HTMLDivElement | null>(null);

  // effet React : initialise la scène au montage et nettoie au démontage
  useEffect(() => {
    if (!containerRef.current) return; // si le conteneur n'existe pas, on quitte
    const mount = containerRef.current; // élément DOM qui accueillera le canvas
    const { renderer, camera, cube, circle, triangle } = createScene1(mount); // crée la scène et récupère renderer/camera/objets

    // définit l'aspect initial de la caméra pour correspondre au conteneur
    if (camera) {
      // si la caméra est disponible
      const iw = mount.clientWidth || 1; // largeur du conteneur (fallback 1)
      const ih = mount.clientHeight || 1; // hauteur du conteneur (fallback 1)
      camera.aspect = iw / ih; // met à jour le ratio d'aspect de la caméra
      camera.updateProjectionMatrix(); // met à jour la matrice de projection de la caméra
    }

    // gestionnaire pour l'événement personnalisé de sélection d'objet
    const handler = (e: Event) => {
      const select = (e as CustomEvent).detail; // récupère le détail (nom) de l'objet sélectionné
      if (!circle || !cube || !triangle) return; // si un objet manque, rien à faire
      circle.visible = select === "sphere"; // affiche/masque la sphère selon la sélection
      cube.visible = select === "cube"; // affiche/masque le cube selon la sélection
      triangle.visible = select === "prisme"; // affiche/masque le prisme selon la sélection
    };

    window.addEventListener("selectObject", handler as EventListener); // attache l'écouteur global pour la sélection

    // observe les changements de taille et ajuste le renderer
    const ro = new ResizeObserver(() => {
      // observe les redimensionnements du conteneur
      const w = mount.clientWidth || 300; // largeur courante (fallback 300)
      const h = mount.clientHeight || 150; // hauteur courante (fallback 150)
      renderer.setSize(w, h); // met à jour la taille du renderer
      if (camera) {
        // si la caméra existe
        camera.aspect = w / h; // met à jour l'aspect ratio
        camera.updateProjectionMatrix(); // met à jour la projection
      }
    });
    ro.observe(mount); // démarre l'observation du conteneur

    // fonction de nettoyage appelée au démontage
    return () => {
      window.removeEventListener("selectObject", handler as EventListener); // retire l'écouteur global
      ro.disconnect(); // arrête le ResizeObserver
      // clean up renderer DOM // supprime le canvas du DOM et libère les ressources
      try {
        // tentative de nettoyage sécurisé
        if (
          renderer &&
          renderer.domElement &&
          mount.contains(renderer.domElement)
        ) {
          // si le canvas est présent
          mount.removeChild(renderer.domElement); // retire le canvas du conteneur
        }
        if (renderer) renderer.dispose(); // libère les ressources du renderer
      } catch {
        // capture les erreurs éventuelles pendant le nettoyage
        // ignore cleanup errors // on ignore les erreurs de nettoyage
      }
    };
  }, []); // dépendances vides : exécute seulement au montage/démontage

  return (
    <>
      <div style={{ width: "100%", height: "100%" }} ref={containerRef} />
    </>
  ); // conteneur pleine taille pour le rendu 3D
}
