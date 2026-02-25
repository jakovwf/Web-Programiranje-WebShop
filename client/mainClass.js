export class MainClass {
    constructor() {
        this.container;
        this.proizvodi = [];
    }
    async draw(mainDiv){
       await this.vratiSveProizvode();

        this.container = document.querySelector(".mainDiv");
        

        this.proizvodi.forEach(p =>{
            const proizvodLink = document.createElement("a");
            


            const prDiv = document.createElement('div');
            prDiv.classList.add("kartica");
            this.container.appendChild(prDiv);

            const img = document.createElement("img");
            img.src = `${p.putanjaDoSLikeProizvoda}.png`;
            img.classList.add("slikaPr");
            prDiv.appendChild(img);

             const textWrapper = document.createElement("div");
            textWrapper.classList.add("textWrapper");
            prDiv.appendChild(textWrapper);

            const naslov = document.createElement("h3");
            naslov.classList.add("naslovPr");
            naslov.innerText = p.imeProizvoda;
            textWrapper.appendChild(naslov);

            const ccena = document.createElement("p");
            ccena.classList.add("cenaPr");
            ccena.innerText=`${p.cenaProizvoda}RSD`;
            console.log(ccena);
            textWrapper.appendChild(ccena);

            const dugme = document.createElement("button");
            dugme.classList.add("buyBtn");
            dugme.innerText = "Naruci";
            prDiv.appendChild(dugme);
        })
    }
    async vratiSveProizvode(){
        const responese = await fetch("https://localhost:7080/api/Proizvod/vratiSveProizvode");

        const result =await responese.json();

       this.proizvodi = result;
       console.log(this.proizvodi);
    }
}