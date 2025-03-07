import * as THREE from 'three';
import { MapControls2D } from '../utils/2dControls';

import Scene from '../core/scene';
import { DEFAULT_OPTIONS_SCENE } from '../utils/constants';

class Viewer2d {
  constructor(scene, options = {}) {
    this.options = {
      ...DEFAULT_OPTIONS_SCENE,
      ...options,
    };
    this.scene = scene || new Scene();
    this.previousWidth = 0;
    this.previousHeight = 0;

    this.initCamera();
    this.animate = this.animate.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  animate() {
    this.scene.stats.begin();
    this.scene.updateMatrixWorld();

    this.renderer.render(this.scene, this.camera);
    this.scene.stats.end();
    requestAnimationFrame(this.animate);
  }

  initCamera() {
    this.camera = new THREE.OrthographicCamera(-100, 100, 100, -100, 0.1, 1000);
    this.camera.zoom = 0.5;
    this.camera.position.set(0, 10, 0);
    this.camera.lookAt(new THREE.Vector3());

    this.scene.add(this.camera);
  }

  setContainer(domNode) {
    this.container = domNode;
    this.initRenderer(domNode);
    this.controls = new MapControls2D(this.camera, this.container);
    this.controls.enableDamping = true;
    window.addEventListener('resize', this.onWindowResize);
    requestAnimationFrame(this.animate);
    this.onWindowResize();
  }

  initRenderer() {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.autoClear = false;
    renderer.autoUpdateScene = false;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    this.renderer = renderer;
    this.container.appendChild(renderer.domElement);
  }

  updateOptions(options) {
    this.options = {
      ...this.options,
      ...options
    };
    this.scene.updateOptions(this.options);
  }

  destroy() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize() {
    const { camera } = this;
    const { offsetWidth, offsetHeight } = this.container;
    if (
      Math.abs(offsetWidth - this.previousWidth) > 10 ||
      Math.abs(offsetHeight - this.previousHeight) > 10
    ) {
      const [cameraWidth, cameraHeight] = [offsetWidth / 100, offsetHeight / 100];
      camera.left = -cameraWidth / 2;
      camera.right = cameraWidth / 2;
      camera.top = cameraHeight / 2;
      camera.bottom = -cameraHeight / 2;
      camera.updateProjectionMatrix();
      this.renderer.setSize(offsetWidth, offsetHeight);
      this.previousWidth = offsetWidth;
      this.previousHeight = offsetHeight;
    }
  }

  addVisualization(vizObject) {
    this.scene.addVisualization(vizObject);
  }
}

export default Viewer2d;
