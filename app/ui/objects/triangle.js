import * as THREE from 'three';

export function createTriangle() {
    const geometry = new THREE.TetrahedronGeometry(2, 0);
    const material = new THREE.MeshBasicMaterial({color: 0xfb542b});
    const triangle = new THREE.Mesh(geometry, material);

    /// 2 - Créer les bordures
    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    triangle.add(edges);

    return triangle;
}