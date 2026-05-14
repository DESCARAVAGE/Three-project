import * as THREE from 'three';
import { createCube } from '../objects/cube.js';
import { createCam } from '../objects/camera.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { createCircle } from '../objects/circle.js';
import { createTriangle } from '../objects/triangle.js';


export function createScene1(container) {
    // Création de scène pour accueillir nos artefacts
    const scene = new THREE.Scene();

    // const axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);

    // Crée et ajoute le cube (avec bordures) depuis le module `cube.js`
    const cube = createCube();
    const circle = createCircle();
    const triangle = createTriangle();
    // add all objects but show only cube by default
    circle.visible = false;
    triangle.visible = false;
    scene.add(cube);
    scene.add(circle);
    scene.add(triangle);

    // caméra
    const camera = createCam();
    
    // C'est le moteur de rendu, En plus de créer l'instance de rendu, nous devons également définir la taille à laquelle nous souhaitons qu'elle restitue notre application. C'est une bonne idée d'utiliser la largeur et la hauteur de la zone que nous voulons remplir avec notre application - dans ce cas, la largeur et la hauteur de la fenêtre du navigateur. Pour les applications gourmandes en performances, vous pouvez également donner setSize des valeurs plus petites, comme window.innerWidth/2 et window.innerHeight/2, ce qui rendra l'application au quart de sa taille.
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    // append renderer to provided container (fallback to body)
    const mountPoint = container || document.body;
    // set initial size based on mountPoint
    const width = mountPoint.clientWidth || window.innerWidth;
    const height = mountPoint.clientHeight || window.innerHeight;
    renderer.setSize(width, height);
    mountPoint.appendChild(renderer.domElement);
    
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.update();

    // pause flag + simple raycast pour détecter le clic sur un objet + stop the time
    let isPaused = false;
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    function getPointerFromEvent(e) {
        const rect = renderer.domElement.getBoundingClientRect();
        const x = e.touches ? e.touches[0].clientX : e.clientX;
        const y = e.touches ? e.touches[0].clientY : e.clientY;
        pointer.x = ((x - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((y - rect.top) / rect.height) * 2 + 1;
    }

    function onPointerDown(e) {
        getPointerFromEvent(e);
        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects([cube, circle, triangle], true);
        if (hits.length) isPaused = true; // maintient la pause tant que l'utilisateur tient le clic/touch
    }

    function onPointerUp() { isPaused = false; }

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('touchstart', onPointerDown, { passive: true });
    renderer.domElement.addEventListener('touchend', onPointerUp);
    

    // boucle d'animation : Cela créera une boucle qui amènera le moteur de rendu à 
    // dessiner la scène à chaque fois que l'écran est actualisé (sur un écran typique,
    // cela signifie 60 fois par seconde). Si vous débutez dans l'écriture de jeux dans le navigateur, 
    // vous pourriez dire "Pourquoi ne pas simplement créer un setInterval ?" Le truc c'est que nous pourrions, 
    // mais requestAnimationFrame qui est utilisé en interne dans WebGLRenderer présente un certain nombre
    // d’avantages. Le plus important est peut-être qu’il s’arrête lorsque l’utilisateur accède à un autre 
    // onglet du navigateur, ne gaspillant ainsi pas sa précieuse puissance de traitement et la durée de vie de 
    // sa batterie.
    let oldTime = 0;
    let delta = 0;
    let position = 0;
    function animate(time) {
        // si en pause, on n'applique pas les rotations (l'objet reste visible)
        if (!isPaused) {
            delta = Math.min(time - oldTime, 100);
            oldTime = time;
            position += delta;
            cube.rotation.x = position / 2000;
            cube.rotation.y = position / 1000;
            cube.rotation.z = position / 4000;

            circle.rotation.y = position / 5000;
            triangle.rotation.z = position / 5000;
        }
        renderer.render(scene, camera);
        
    };

    renderer.setAnimationLoop(animate);

    // no global resize here — parent component should handle resize using container size

    return { scene, camera, renderer, cube, circle, triangle };
}