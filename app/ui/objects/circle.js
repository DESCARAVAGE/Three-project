import * as THREE from 'three';

export function createCircle() {
    const geometry = new THREE.SphereGeometry(2, 50, 50);
    const material = new THREE.MeshBasicMaterial({color: 0x000000, wireframe: false});
    const circle = new THREE.Mesh(geometry, material);

    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const edgesMaterial = new THREE.LineBasicMaterial({color: 0xffffff});
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    circle.add(edges);

    return circle;
}