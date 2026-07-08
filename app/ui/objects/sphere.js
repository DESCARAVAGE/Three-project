import * as THREE from 'three';

export function createSphere() {
    const geometry = new THREE.SphereGeometry(2, 50, 50);
    const material = new THREE.MeshBasicMaterial({color: 0x000000, wireframe: false});
    const sphere = new THREE.Mesh(geometry, material);
    
    sphere.name = 'sphere';

    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const edgesMaterial = new THREE.LineBasicMaterial({color: 0xffffff});
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    sphere.add(edges);

    let dataSphere =  {
        name: sphere.name,
        material: sphere.material,
        geometry: sphere.geometry
    };

    // console.log(dataSphere);
    

    return {sphere, dataSphere};
};