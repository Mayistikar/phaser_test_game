export default class DragManager {
  constructor (scene, _object) {
    this.scene = scene;
    this._object = _object;
  };

  dragObject () {
    this._object.setInteractive();
    this.scene.input.setDraggable(this._object);
    this.scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });
  }
}