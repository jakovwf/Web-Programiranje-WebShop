export class Admin{
    constructor(){
        this.vrednostSelekta;
    }

    crtaj(){
        const glavniKontejner = document.querySelector(".adminPanel");
        
        const korisnikDugme = this.napraviSelect("korisnikDugme",glavniKontejner);
       
        const opcijaReg = this.napraviOption("Registracija",korisnikDugme);
        const opcijaLog = this.napraviOption("Login",korisnikDugme);

        const opcijaDel = this.napraviOption("Obrisi proizvod",korisnikDugme);
        const opcijaUPD = this.napraviOption("Azuriraj proizvod",korisnikDugme);
        const opcijaADD = this.napraviOption("Dodaj proizvod",korisnikDugme);

        const opcijaIzb = this.napraviOption("Izbrisi tip",korisnikDugme);
        const opcijaDod = this.napraviOption("Dodaj tip",korisnikDugme);

        const dugmedugme = document.createElement("button");
        dugmedugme.classList.add("dugme");
        dugmedugme.innerText = "Izaberi";
        glavniKontejner.appendChild(dugmedugme);

        dugmedugme.addEventListener("click",()=>{
            this.vrednostSelekta=korisnikDugme.value;
            console.log(this.vrednostSelekta);
            this.ccrtaj(this.vrednostSelekta,options);
        })

        const options = document.querySelector(".optionPanel");
        
        

        



    }

    ccrtaj(vrednost,kontejner){
        kontejner.innerHTML ="";
        
        if(vrednost==="Registracija"){
            const p = document.createElement("p");
            p.innerText = "Ime";
            kontejner.appendChild(p);
            const inputt = document.createElement("input");
            inputt.placeholder="Text";
            inputt.type="text";
            kontejner.appendChild(inputt);
        }


    }


    napraviSelect(klasa,kontejner){
        const korisnikDugme = document.createElement("select");
        korisnikDugme.classList.add(klasa);
        kontejner.appendChild(korisnikDugme);
        return korisnikDugme;
    }
    napraviOption(text, select){
    const option = document.createElement("option");

    option.textContent = text;   
    option.value = text;         
    select.appendChild(option);  

    return option;
}

}