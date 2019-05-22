export const OBJECT_TYPE_ARROW = 'Arrow';
export const OBJECT_TYPE_AXES = 'Axes';
export const OBJECT_TYPE_FLAT_ARROW = 'FlatArrow';

export const MAX_POINTCLOUD_POINTS = 500000;

export const MESSAGE_TYPE_ROBOT_MODEL =                      'robot_description';
export const MESSAGE_TYPE_ACCELSTAMPED =                     'geometry_msgs/AccelStamped';
export const MESSAGE_TYPE_POLYGONSTAMPED =                   'geometry_msgs/PolygonStamped';
export const MESSAGE_TYPE_POSEARRAY =                        'geometry_msgs/PoseArray';
export const MESSAGE_TYPE_POSESTAMPED =                      'geometry_msgs/PoseStamped';
export const MESSAGE_TYPE_TWISTSTAMPED =                     'geometry_msgs/TwistStamped';
export const MESSAGE_TYPE_VECTOR3STAMPED =                   'geometry_msgs/Vector3Stamped';
export const MESSAGE_TYPE_WRENCHSTAMPED =                    'geometry_msgs/WrenchStamped';
export const MESSAGE_TYPE_BOUNDINGVOLUME =                   'moveit_msgs/BoundingVolume';
export const MESSAGE_TYPE_DISPLAYJOINTSTATE =                'sensor_msgs/JointState';
export const MESSAGE_TYPE_DISPLAYROBOTSTATE =                'moveit_msgs/DisplayRobotState';
export const MESSAGE_TYPE_DISPLAYTF =                        'tf/tfMessage';
export const MESSAGE_TYPE_TF =                               'tf/tfMessage';
export const MESSAGE_TYPE_DISPLAYTF2 =                       'tf2_msgs/TFMessage';
export const MESSAGE_TYPE_TF2 =                              'tf2_msgs/TFMessage';
export const MESSAGE_TYPE_DISPLAYTRAJECTORY =                'moveit_msgs/DisplayTrajectory';
export const MESSAGE_TYPE_PLANNINGSCENE =                    'moveit_msgs/PlanningScene';
export const MESSAGE_TYPE_OCCUPANCYGRID =                    'nav_msgs/OccupancyGrid';
export const MESSAGE_TYPE_ODOMETRY =                         'nav_msgs/Odometry';
export const MESSAGE_TYPE_PATH =                             'nav_msgs/Path';
export const MESSAGE_TYPE_COMPRESSEDIMAGE =                  'sensor_msgs/CompressedImage';
export const MESSAGE_TYPE_IMAGE =                            'sensor_msgs/Image';
export const MESSAGE_TYPE_LASERSCAN =                        'sensor_msgs/LaserScan';
export const MESSAGE_TYPE_MAGNETICFIELD =                    'sensor_msgs/MagneticField';
export const MESSAGE_TYPE_POINTCLOUD =                       'sensor_msgs/PointCloud';
export const MESSAGE_TYPE_POINTCLOUD2 =                      'sensor_msgs/PointCloud2';
export const MESSAGE_TYPE_RANGE =                            'sensor_msgs/Range';
export const MESSAGE_TYPE_MARKER =                           'visualization_msgs/Marker';
export const MESSAGE_TYPE_MARKERARRAY =                      'visualization_msgs/MarkerArray';
export const MESSAGE_TYPE_POSECOVARIANCE =                   'geometry_msgs/PoseWithCovariance';
export const MESSAGE_TYPE_INTERACTIVEMARKER_INIT =           'visualization_msgs/InteractiveMarkerInit';
export const MESSAGE_TYPE_INTERACTIVEMARKER_UPDATE =         'visualization_msgs/InteractiveMarkerUpdate';
export const MESSAGE_TYPE_INTERACTIVEMARKER_FEEDBACK =       'visualization_msgs/InteractiveMarkerFeedback';

export const TF_TOPICS = [
  ['/tf', MESSAGE_TYPE_TF],
  ['/tf', MESSAGE_TYPE_TF2],
  ['/tf_static', MESSAGE_TYPE_TF],
  ['/tf_static', MESSAGE_TYPE_TF2],
];

export const SUPPORTED_MESSAGE_TYPES = [
  MESSAGE_TYPE_DISPLAYJOINTSTATE,
  MESSAGE_TYPE_DISPLAYROBOTSTATE,
  MESSAGE_TYPE_DISPLAYTF,
  MESSAGE_TYPE_MARKER,
  MESSAGE_TYPE_LASERSCAN,
  MESSAGE_TYPE_MARKERARRAY,
  MESSAGE_TYPE_OCCUPANCYGRID,
  MESSAGE_TYPE_ODOMETRY,
  MESSAGE_TYPE_PATH,
  MESSAGE_TYPE_POINTCLOUD,
  MESSAGE_TYPE_POINTCLOUD2,
  MESSAGE_TYPE_POLYGONSTAMPED,
  MESSAGE_TYPE_POSEARRAY,
  MESSAGE_TYPE_POSESTAMPED,
  MESSAGE_TYPE_ROBOT_MODEL,
  MESSAGE_TYPE_IMAGE,
  MESSAGE_TYPE_INTERACTIVEMARKER_UPDATE
];

export const UNSUPPORTED_MESSAGE_TYPES = [
  MESSAGE_TYPE_ACCELSTAMPED,
  MESSAGE_TYPE_BOUNDINGVOLUME,
  MESSAGE_TYPE_COMPRESSEDIMAGE,
  MESSAGE_TYPE_DISPLAYTRAJECTORY,
  MESSAGE_TYPE_MAGNETICFIELD,
  MESSAGE_TYPE_PLANNINGSCENE,
  MESSAGE_TYPE_RANGE,
  MESSAGE_TYPE_TWISTSTAMPED,
  MESSAGE_TYPE_VECTOR3STAMPED,
  MESSAGE_TYPE_WRENCHSTAMPED,
];

export const MARKERARRAY_TYPES = {
  ARROW: 0,
  CUBE: 1,
  SPHERE: 2,
  CYLINDER: 3,
  LINE_STRIP: 4,
  LINE_LIST: 5,
  CUBE_LIST: 6,
  SPHERE_LIST: 7,
  POINTS: 8,
  TEXT_VIEW_FACING: 9,
  MESH_RESOURCE: 10,
  TRIANGLE_LIST: 11,
};

/*
# "3D" interaction modes work with the mouse+SHIFT+CTRL or with 3D cursors.
# MOVE_3D: Translate freely in 3D space.
# ROTATE_3D: Rotate freely in 3D space about the origin of parent frame.
# MOVE_ROTATE_3D: Full 6-DOF freedom of translation and rotation about the cursor origin.
*/
export const INTERACTION_MODES = {
  NONE: 0,
  MENU: 1,
  BUTTON: 2,
  MOVE_AXIS: 3,
  MOVE_PLANE: 4,
  ROTATE_AXIS: 5,
  MOVE_ROTATE: 6,

  MOVE_3D: 7,
  ROTATE_3D: 8,
  MOVE_ROTATE_3D: 9,
};

/*
# Orientation mode: controls how orientation changes.
# INHERIT: Follow orientation of interactive marker
# FIXED: Keep orientation fixed at initial state
# VIEW_FACING: Align y-z plane with screen (x: forward, y:left, z:up).
*/
export const ORIENTATION_MODES = {
  INHERIT: 0,
  FIXED: 1,
  VIEW_FACING: 2,
};

/*
# Type of the event
# KEEP_ALIVE: sent while dragging to keep up control of the marker
# MENU_SELECT: a menu entry has been selected
# BUTTON_CLICK: a button control has been clicked
# POSE_UPDATE: the pose has been changed using one of the controls
*/
export const FEEDBACK_EVENT_TYPES = {
  KEEP_ALIVE: 0,
  POSE_UPDATE: 1,
  MENU_SELECT: 2,
  BUTTON_CLICK: 3,
  MOUSE_DOWN: 4,
  MOUSE_UP: 5,
}
