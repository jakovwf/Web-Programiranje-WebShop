import { MainClass } from "./mainClass.js";

const mainDiv = document.createElement('div');
mainDiv.classList.add("mainDiv");
document.body.appendChild(mainDiv);


const mainInstance = new MainClass();
mainInstance.draw(mainDiv);