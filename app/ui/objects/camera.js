import * as THREE from 'three';

export function createCam() {

    // On vient créer notre caméra qui nous permettra de naviguer dans notre scène
    // 1er arg : Field Of View (FOV : champ de vison ) ce sera l'étendue de la scène qui est vue sur l'écran à un moment donnée. valeur en degré
    // 2eme aspect ratio : Vous souhaitez presque toujours utiliser la largeur de l'élément divisée par la hauteur, sinon vous obtiendrez le même résultat que lorsque vous regardez de vieux films sur un téléviseur grand écran : l'image semble écrasée
    // Les 2 suivant sont : near et far plans de découpage. Ce que cela signifie, c'est que les objets sont plus éloignés de la caméra que la valeur de far ou plus proche que near ne sera pas rendu. Vous n’avez pas à vous en soucier maintenant, mais vous souhaiterez peut-être utiliser d’autres valeurs dans vos applications pour obtenir de meilleures performances
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(0, 2, 5);

    return camera;
}