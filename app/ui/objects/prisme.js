import * as THREE from 'three';

export function createPrisme() {
    const geometry = new THREE.TetrahedronGeometry(2, 0);
    const material = new THREE.MeshBasicMaterial({color: 0xfb542b});
    const prisme = new THREE.Mesh(geometry, material);

    prisme.name = 'prisme';

    /// 2 - Créer les bordures
    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    prisme.add(edges);

    return prisme;
}