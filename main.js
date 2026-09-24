import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvasArea = document.getElementById("threeD");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
const renderer = new THREE.WebGLRenderer({ canvas: canvasArea });
const controls = new OrbitControls(camera, renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const edgeGeometry = new THREE.EdgesGeometry(geometry);
const material = new THREE.LineBasicMaterial({ color: 0xffffff });
controls.update();
const cubes = [];
const cube1 = new THREE.LineSegments(edgeGeometry, material);
const cube2 = new THREE.LineSegments(edgeGeometry, material);
cubes[0] = cube1;
cubes[1] = cube2;
cube1.position.x = 1;
cube1.position.y = 0;
cube2.position.x = -1;
cube2.position.y = 0;
scene.add(cube1);
scene.add(cube2);
camera.position.z = 1;
controls.keys = {
  LEFT: "ArrowLeft", //left arrow
  UP: "ArrowUp", // up arrow
  RIGHT: "ArrowRight", // right arrow
  BOTTOM: "ArrowDown",
};

function animate(time) {
  cube1.rotation.x = time / -8000;
  cube1.rotation.y = time / -8000;
  cube2.rotation.x = time / 8000;
  cube2.rotation.y = time / 8000;
  controls.update();
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
