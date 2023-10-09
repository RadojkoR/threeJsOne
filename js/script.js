import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';




const scene = new THREE.Scene();
let camera;
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff);
document.body.appendChild(renderer.domElement);

//light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0,5);
scene.add(directionalLight);
const controls = new OrbitControls(camera, renderer.domElement);


// Enable zooming
controls.enableZoom = true;

// Configure zooming options (optional)
controls.minDistance = 0.1; // Minimum zoom distance
controls.maxDistance = 10;  // Maximum zoom distance

// Commented out cube-related code
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

camera.position.set(0, 2, 3000); // Adjust the camera position as needed
camera.lookAt(0, 0, 0);

controls.target.set(0, 0, 0); // Set the target point (center of the scene)
controls.enableZoom = false; // Disable zooming (optional)


// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
//     // Remove cube rotation code as cube is not used
//     // cube.rotation.x += 0.01;
//     // cube.rotation.y += 0.01
// }

// Commented out cube-related code
// animate();

// Instantiate a loader
const loader = new GLTFLoader();

loader.load('public/bucket/scene.gltf', function(gltf) {
    scene.add(gltf.scene);
    console.log("radi")
    // const textureLoader = new THREE.TextureLoader();

    // const texture1 = textureLoader.load('public/porshe/textures/930_chromes_baseColor.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture1;
    //     }
    // });

    // const texture2 = textureLoader.load('public/porshe/textures/930_chromes_metallicRoughness.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture2;
    //     }
    // });

    // const texture3 = textureLoader.load('public/porshe/textures/930_lights_baseColor.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture3;
    //         child.material.roughness = 0.5; // Adjust roughness
    // child.material.metalness = 0.5; // Adjust metalness
    // child.material.emissive = new THREE.Color(0x222222);
    //     }
    // });

    // const texture4 = textureLoader.load('public/porshe/textures/930_lights_metallicRoughness.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture4;
    //     }
    // });

    // const texture5 = textureLoader.load('public/porshe/textures/930_lights_normal.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture5;
    //     }
    // });

    // const texture6 = textureLoader.load('public/porshe/textures/930_plastics_baseColor.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture6;
    //     }
    // });

    // const texture7 = textureLoader.load('public/porshe/textures/930_plastics_metallicRoughness.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture7;
    //     }
    // });

    // const texture8 = textureLoader.load('public/porshe/textures/930_rim_baseColor.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture8;
    //     }
    // });

    // const texture9 = textureLoader.load('public/porshe/textures/930_rim_metallicRoughness.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture9;
    //     }
    // });

    // const texture10 = textureLoader.load('public/porshe/textures/930_rim_normal.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture10;
    //     }
    // });

    // const texture11 = textureLoader.load('public/porshe/textures/930_stickers_baseColor.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture11;
    //     }
    // });

    // const texture12 = textureLoader.load('public/porshe/textures/930_tire_baseColor.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture12;
    //     }
    // });

    // const texture13 = textureLoader.load('public/porshe/textures/930_tire_metallicRoughness.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture13;
    //     }
    // });

    // const texture14 = textureLoader.load('public/porshe/textures/930_tire_normal.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture14;
    //     }
    // });

    // const texture15 = textureLoader.load('public/porshe/textures/930_wunderbaum_baseColor.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture15;
    //     }
    // });

    // const texture16 = textureLoader.load('public/porshe/textures/930_wunderbaum_metallicRoughness.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture16;
    //     }
    // });

    //  const texture17 = textureLoader.load('public/porshe/textures/coat_baseColor.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture17;
    //     }
    // });

    //  const texture18 = textureLoader.load('public/porshe/textures/coat_metallicRoughness.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture18;
    //     }
    // });

    //  const texture19 = textureLoader.load('public/porshe/textures/glass_baseColor.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture19;
    //     }
    // });

    //  const texture20 = textureLoader.load('public/porshe/textures/glass_metallicRoughness.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture20;
    //     }
    // });

    //  const texture21 = textureLoader.load('public/porshe/textures/material_0_baseColor.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture21;
    //     }
    // });

    //  const texture22 = textureLoader.load('public/porshe/textures/paint_clearcoat.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture22;
    //     }
    // });

    //  const texture23 = textureLoader.load('public/porshe/textures/paint_clearcoat_normal.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture23;
    //     }
    // });

    //  const texture24 = textureLoader.load('public/porshe/textures/paint_clearcoat_roughness.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture24;
    //     }
    // });

    //  const texture25 = textureLoader.load('public/porshe/textures/paint_metallicRoughness.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture25;
    //     }
    // });

    // const texture26 = textureLoader.load('public/porshe/textures/plate_baseColor.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture26;
    //     }
    // });

    // const texture27 = textureLoader.load('public/porshe/textures/plate_normal.png');
    // gltf.scene.traverse(function(child) {
    //     if(child.isMesh && child.material instanceof THREE.MeshStandardMaterial){
    //         child.material.map = texture27;
    //     }
    // });


}, undefined, function(error) {
    console.log(error);
});



function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    controls.update()
}

animate();