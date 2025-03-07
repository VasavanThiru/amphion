import * as THREE from 'three';

import { OBJECT_TYPE_ARROW, OBJECT_TYPE_AXES, OBJECT_TYPE_FLAT_ARROW } from './constants';

export const checkToleranceThresholdExceed = (oldPose, newPose, options) => {
  const { positionTolerance, angleTolerance } = options;
  const { position, quaternion } = newPose;
  const { position: oldPosition, quaternion: oldQuaternion } = oldPose;

  const positionToleranceBool = oldPosition.distanceTo(position) > positionTolerance;
  const angleToleranceBool = oldQuaternion.angleTo(quaternion) > angleTolerance;

  return positionToleranceBool || angleToleranceBool;
};

export const setObjectDimension = (object, options) => {
  switch (options.type) {
    case OBJECT_TYPE_ARROW: {
      const {
        color,
        alpha,
        shaftLength,
        shaftRadius,
        headLength,
        headRadius
      } = options;

      object.setHeadDimensions({ radius: headRadius, length: headLength });
      object.setShaftDimensions({ radius: shaftRadius, length: shaftLength });
      object.setAlpha(alpha);
      object.setColor({ cone: new THREE.Color(color), cylinder: new THREE.Color(color) });
      break;
    }
    case OBJECT_TYPE_AXES: {
      const { axesLength, axesRadius } = options;

      object.setLength(axesLength);
      object.setRadius(axesRadius);
      break;
    }
    case OBJECT_TYPE_FLAT_ARROW: {
      const { arrowLength, color } = options;

      object.setLength(arrowLength);
      object.setColor(new THREE.Color(color));
      break;
    }
  }
};

export const removeChildren = (object) => {
  while (object.children.length > 0) {
    object.remove(object.children[0]);
  }
};
