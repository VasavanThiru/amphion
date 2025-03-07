import ROSLIB from 'roslib';

class Core {
  constructor(ros, topicName, messageType, options = {}) {
    const { onHeaderChange } = options;
    this.options = options;
    this.ros = ros;
    this.headerFrameId = '';
    this.changeTopic(topicName, messageType, false);
    this.onHeaderChange = onHeaderChange || (() => {});
    this.update = this.update.bind(this);
  }

  hide() {
    this.object.visible = false;
  }

  show() {
    this.object.visible = true;
  }

  destroy() {
    this.unsubscribe();
    this.object.parent.remove(this.object);
    this.object = null;
  }

  reset() {}

  subscribe() {
    if (!this.topicInstances) {
      return;
    }
    this.topicInstances.forEach((t) => {
      t.subscribe(this.update);
    });
  }

  unsubscribe() {
    if (!this.topicInstances) {
      return;
    }
    this.topicInstances.forEach((t) => {
      t.unsubscribe();
    });
  }

  update(message) {
    const header = message.header ? message.header.frame_id : '';
    if (header !== this.headerFrameId) {
      this.headerFrameId = header;
      this.onHeaderChange(this.headerFrameId);
    }
  }

  updateOptions(options) {
    this.options = {
      ...this.options,
      ...options,
    };
  }

  changeTopic(topicName, messageType, autoSubscribe = true) {
    const { throttleRate, queueSize } = this.options;

    if(autoSubscribe) {
      this.unsubscribe();
    }

    this.topicName = topicName;
    this.messageType = messageType || this.messageType;
    this.topicInstances = (Array.isArray(topicName) ? topicName : [{ name: topicName, messageType }]).map(({ name, messageType }) => new ROSLIB.Topic({
      ros: this.ros,
      name,
      messageType,
      throttle_rate: throttleRate || 0,
      queue_size: queueSize || 10,
    }));

    if(autoSubscribe) {
      this.reset();
      this.subscribe();
    }
  }
}

export default Core;
