

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

    async ccrtaj(vrednost,kontejner){
        kontejner.innerHTML ="";
        
        if(vrednost==="Registracija"){
            const p1 = this.napraviP("Ime",kontejner);
           const i1 = this.napraviInput("Ime","text",kontejner);
            const p2 = this.napraviP("Prezime",kontejner);
            const i2 = this.napraviInput("Prezime","text",kontejner);
            const p3 = this.napraviP("Email",kontejner);
            const i3 = this.napraviInput("Email","email",kontejner);
            const p4 = this.napraviP("Password",kontejner);
            const i4 = this.napraviInput("Password","password",kontejner);
            const dugme = this.napraviButton(`${vrednost}`,kontejner);
            dugme.onclick = async()=>{
                try {
                     const response = await fetch("https://localhost:7080/api/Korisnik/registracija",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        ime:i1.value,
                        prezime:i2.value,
                        email:i3.value,
                        password:i4.value
                    })
                });
                if(response.ok){
                    const konacno =await response.json();    
                    alert("Uspesno si registrovao novog korisnika");
                    kontejner.innerHTML = "<h3>Izaberi opciju</h3>";
                }else{
                    alert("Korisnik nije pravilno registorvan");
                    
                }
                } catch (error) {
                    console.error(error);
                }
               
                
                
            }
        }else if(vrednost==="Login"){
            const p3 = this.napraviP("Email",kontejner);
            const i3 = this.napraviInput("Email","email",kontejner);
            const p4 = this.napraviP("Password",kontejner);
            const i4 = this.napraviInput("Password","password",kontejner);
            const dugme = this.napraviButton(`${vrednost}`,kontejner);
            dugme.onclick = async()=>{
                try {
                    const url = `https://localhost:7080/api/Korisnik/login/${encodeURIComponent(i3.value)}/${encodeURIComponent(i4.value)}`;
                    const response = await fetch(url,{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        }
                    });
                    
                    if(response.ok){
                        const odg = await response.json();
                        alert("Uspesni login");
                        localStorage.setItem("UlogovaniKorisnik", JSON.stringify(odg));
                        window.location.reload();
                    }else{
                        alert("Neuspesan login");
                    }
                } catch (error) {
                    console.error("Losee");
                }
                
            
            
            
            }
        }else if(vrednost==="Obrisi proizvod"){
             const p2 = this.napraviP("ID Proizvoda",kontejner);
            const i2 = this.napraviInput("ID proizvoda","text",kontejner);
            const dugme = this.napraviButton(`${vrednost}`,kontejner);
        }else if(vrednost==="Azuriraj proizvod"){
             const p2 = this.napraviP("ID Proizvoda",kontejner);
            const i2 = this.napraviInput("ID proizvoda","text",kontejner);
            const dugme = this.napraviButton(`${vrednost}`,kontejner);
        }else if(vrednost==="Dodaj proizvod"){
            const dugme = this.napraviButton(`${vrednost}`,kontejner);
        }else if(vrednost === "Izbrisi tip"){
            const dugme = this.napraviButton(`${vrednost}`,kontejner);
        }else if(vrednost === "Dodaj tip"){
            const dugme = this.napraviButton(`${vrednost}`,kontejner);
        }else{
            alert("Pogrensno si uneo");
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

    napraviInput(placeholder,type,kontejner){
         const inputt = document.createElement("input");
            inputt.placeholder=placeholder;
            inputt.type=type;
            kontejner.appendChild(inputt);
            return inputt;
    }
    napraviP(ineer,kontejner){
        const p = document.createElement("p");
            p.innerText = ineer;
            kontejner.appendChild(p);
    }
    napraviButton(iner,kontejner){
        const btn = document.createElement("button");
        btn.innerText =iner;
        kontejner.appendChild(btn);
        return btn; 
    }

}