import * as THREE from 'three';

import Axes from './Axes';
import Group from './Group';
import Text from './Text';
import Arrow from './Arrow';
import {
  DEFAULT_COLOR_ARROW,
  DEFAULT_CONE_HEIGHT,
  DEFAULT_CONE_RADIUS,
  DEFAULT_CYLINDER_HEIGHT,
  DEFAULT_CYLINDER_RADIUS,
} from '../utils/constants';

class TfFrame extends Group {
  constructor(frameId) {
    super();
    this.add(new Axes(0.015, 0.25));
    const textObject = new Text(frameId);
    textObject
      .rotateY(Math.PI)
      .translateX(0.03)
      .translateY(0.03);
    this.add(textObject);
    this.arrow = new Arrow();
    this.arrow.setHeadDimensions({ length: DEFAULT_CONE_HEIGHT * 0.3 / 2, radius: DEFAULT_CONE_RADIUS * 0.1 / 2 });
    this.arrow.setShaftDimensions({ length: DEFAULT_CYLINDER_HEIGHT, radius: DEFAULT_CYLINDER_RADIUS * 0.05 / 6 });
    this.arrow.setColor({ cone: new THREE.Color('#FF1493'), cylinder: new THREE.Color(DEFAULT_COLOR_ARROW) });
    this.add(this.arrow);
    this.name = TfFrame.getName(frameId);
  }

  static getName(frameId) {
    return `tf-${frameId}`;
  }
}

export default TfFrame;
