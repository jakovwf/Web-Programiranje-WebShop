import { MainClass } from "./mainClass.js";


const podnaslov = document.createElement("h2");
        podnaslov.classList.add("Naslov");
        podnaslov.innerText = "Proizvodi";
        document.body.appendChild(podnaslov);


const mainDiv = document.createElement('div');
mainDiv.classList.add("mainDiv");
document.body.appendChild(mainDiv);




const mainInstance = new MainClass();
mainInstance.draw(mainDiv);