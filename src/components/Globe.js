import React, { useEffect, useRef } from "react"; // Importation de React, useRef et useEffect
import * as THREE from "three"; // Importation de Three.js
import "../styles/Globe.css"; // Importation des styles CSS pour ce composant

const Globe = props => {
  const mount = useRef(null); // Création d'une référence à un élément DOM pour ajouter le rendu Three.js

  useEffect(() => {
    const initialRef = mount.current;
    // Utilisation de useEffect pour initialiser le rendu Three.js une fois que le composant est monté
    const scene = new THREE.Scene(); // Création d'une nouvelle scène Three.js
    const camera = new THREE.PerspectiveCamera(
      75, // Angle de vue de la caméra
      props.availableWidth / props.availableHeight, // Ratio d'aspect
      0.1, // Distance minimale de rendu
      1000 // Distance maximale de rendu
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // Création d'un nouveau rendu WebGL avec antialiasing
    renderer.setSize(props.availableWidth, props.availableHeight); // Définition de la taille du rendu
    mount.current.appendChild(renderer.domElement); // Ajout du rendu à l'élément DOM référencé par mount

    const geometry = new THREE.SphereGeometry(1, 32, 32); // Création d'une nouvelle géométrie de sphere

    const material = new THREE.MeshBasicMaterial({
      wireframe: true
    }); // Définition d'un nouveau matériau basique de couleur verte

    const sphere = new THREE.Mesh(geometry, material);

    sphere.rotation.z = -0.3;

    scene.add(sphere);

    camera.position.z = 4; // Déplacement de la caméra vers l'arrière de la scène

    const animate = function () {
      // Définition de la boucle d'animation pour faire tourner le sphere
      requestAnimationFrame(animate); // Appel à la méthode requestAnimationFrame() de Three.js pour créer une boucle d'animation

      sphere.rotation.y += 0.01; // Rotation du sphere sur l'axe Y
      renderer.render(scene, camera); // Rendu de la scène et de la caméra
    };
    animate(); // Appel initial à la boucle d'animation
    renderer.render(scene, camera); // Rendu de la scène et de la caméra

    // Nettoyage de la scène lorsque le composant est démonté
    return () => {
      initialRef.removeChild(initialRef.firstChild);
    };
  }, [props.availableWidth, props.availableHeight]);

  return <div ref={mount}></div>; // Renvoi de l'élément DOM référencé par mount pour afficher le rendu Three.js
};

export default Globe;
