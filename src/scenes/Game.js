import logoImg from "../assets/logo.png";
import DragManager from "../utils/DragManager";

export default class Game extends Phaser.Scene {

  constructor () {
    super ({
      key: "Game"
    })
  }

  preload() {
    this.load.image("logo", logoImg);
  }
  
  create() {
    const logo = this.add.image(400, 150, "logo");
    const dragManager = new DragManager(this, logo);
    dragManager.dragObject();

  }
  
  update() {

  }
}
