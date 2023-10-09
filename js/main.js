import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);



const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff);
document.body.appendChild(renderer.domElement);

renderer.domElement.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1);
directionalLight.castShadow = false;
scene.add(directionalLight);

const controls = new OrbitControls(camera, renderer.domElement);

// Disable right-click rotation
controls.mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.ROTATE,
};

controls.enableZoom = true;
controls.minDistance = 0.1;
controls.maxDistance = 50;

// Adjust the camera position to move it farther from the model
camera.position.set(0, 2, 10); // Increase the z-coordinate value as needed
camera.lookAt(0, 0, 0);

const loader = new GLTFLoader();
loader.load('public/bucket/scene.gltf', function (gltf) {
    gltf.scene.scale.set(0.1, 0.1, 0.1); // Adjust the scale as needed
    
    // Configure custom materials to not cast or receive shadows
    gltf.scene.traverse(function (child) {
        if (child.isMesh) {
            // Assuming you have custom materials here
            const customMaterial = child.material;
            customMaterial.castShadow = false;   // Disable casting shadows
            customMaterial.receiveShadow = false; // Disable receiving shadows
            console.log(customMaterial);
        }
    });

    scene.add(gltf.scene);
}, undefined, function (error) {
    console.log(error);
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
}

animate();


