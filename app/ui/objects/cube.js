import * as THREE from 'three';

export function createCube() {
		/// 1 - Créer le cube
		// On vient créer notre cube de 1/1/1, hauteur, lagueur, profondeur. il est composé de point vertices et faces 
		// On ajoute un matériel, ici de la couleur  en hexadécimal
		// Ensuite nous fusionnons les propriétés définient pour créer notre cube avec Mesh().
		const geometry = new THREE.BoxGeometry( 2, 2, 2 );
		const material = new THREE.MeshBasicMaterial( { color: 0x6b09aa } );
		const cube = new THREE.Mesh( geometry, material );
	
		/// 2 - Créer les bordures
		const edgesGeometry = new THREE.EdgesGeometry(geometry);
		const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
		const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
		cube.add(edges);

		return cube;
};