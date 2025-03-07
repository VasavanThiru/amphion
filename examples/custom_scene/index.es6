import {
  AmbientLight,
  DirectionalLight,
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  Color,
  Vector3
} from 'three';
import { EditorControls } from 'three/examples/jsm/controls/EditorControls';
import ROSLIB from 'roslib';
import Amphion from '../../build/amphion.module';
import CONFIG from "../config";

let camera, controls, scene, renderer;
init();
animate();
addMarker();

function init() {
  camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10);
  camera.position.set(0.3,0.2, 0.3);
  camera.lookAt(new Vector3());
  scene = new Scene();
  scene.background = new Color(0xffffff);

  // lights
  const light1 = new DirectionalLight(0xffffff);
  light1.position.set(1, 1, 0);
  scene.add(light1);
  const light2 = new DirectionalLight(0xffffff);
  light2.position.set(0, 1, 1);
  scene.add(light2);
  const light3 = new AmbientLight(0xffffff);
  scene.add(light3);

  // renderer
  renderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.getElementById('scene').appendChild(renderer.domElement);

  window.addEventListener('resize', onWindowResize, false);
  render();

  controls = new EditorControls(camera, renderer.domElement);
  controls.enableDamping = true;
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}
function animate() {
  requestAnimationFrame(animate);
  controls.rotate(new Vector3(2, 0, 0));
  render();
}
function render() {
  renderer.render(scene, camera);
}

function addMarker() {
  const ros = new ROSLIB.Ros();
  ros.connect(CONFIG.ROS_WEBSOCKET_ENDPOINT);
  const marker = new Amphion.Marker(ros, '/cube_list');
  marker.subscribe();
  marker.object.position.set(-0.04, -1.24, -0.04);
  scene.add(marker.object);
}
