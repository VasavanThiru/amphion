import * as THREE from 'three';

import Core from '../core';
import {
  DEFAULT_OPTIONS_POSE,
  MESSAGE_TYPE_POSESTAMPED,
  POSE_OBJECT_TYPES,
} from '../utils/constants';
import Arrow from '../primitives/Arrow';
import Axes from '../primitives/Axes';
import LineArrow from '../primitives/LineArrow';
import { setObjectDimension } from '../utils/helpers';

class Pose extends Core {
  constructor(ros, topicName, options = DEFAULT_OPTIONS_POSE) {
    super(ros, topicName, MESSAGE_TYPE_POSESTAMPED, options);
    this.object = new THREE.Group();
    this.primitive = null;
    this.updateOptions({
      ...DEFAULT_OPTIONS_POSE,
      ...options,
    });
  }

  static getNewPrimitive(options) {
    const {
      type
    } = options;
    let newObject = null;

    switch (type) {
      case POSE_OBJECT_TYPES.arrow:
        newObject = new Arrow();
        break;
      case POSE_OBJECT_TYPES.axes:
        newObject = new Axes();
        break;
      case POSE_OBJECT_TYPES.flatArrow:
        newObject = new LineArrow();
        break;
    }

    return newObject;
  }

  updateOptions(options) {
    super.updateOptions(options);
    const { type } = this.options;

    if(this.primitive && (this.primitive.type !== type)) {
      this.object.remove(this.primitive);
      this.primitive = null;
    }

    if(!this.primitive) {
      this.primitive = Pose.getNewPrimitive(this.options);
      this.object.add(this.primitive);
    }

    setObjectDimension(this.primitive, this.options);
  }

  update(message) {
    super.update(message);
    const { pose: { position, orientation } } = message;
    this.primitive.setTransform({
      translation: position,
      rotation: orientation
    });
  }
}

export default Pose;
