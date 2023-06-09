import { helloWorld } from "../utils/helpers/helloWorld.js";

class HelloWorld {
  constructor(fileName) {
    this.fileName = fileName;
  }

  sayHello() {
    return helloWorld(this.fileName);
  }
}

const helloWorldInstance = new HelloWorld("helloWorldModel.js");

export { helloWorldInstance };
