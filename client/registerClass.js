export class Register {
    constructor() {
        this.kontejner = null;
        // Dobra je praksa da ovde definišeš elemente da se zna da postoje
        this.imePolje = null;
        this.prezimePolje = null;
        this.emailPolje = null;
        this.passPolje = null;
    }

    crtaj() {
        this.kontejner = document.createElement('div');
        this.kontejner.className = 'regKontejner';
        document.body.appendChild(this.kontejner);

        // ISPRAVKA 1: Koristimo 'this' da sačuvamo reference, a ne 'const'
        this.imePolje = this.napraviInput('imeInput', 'Ime', 'text');
        this.prezimePolje = this.napraviInput('prezimeInput', 'Prezime', 'text');
        this.emailPolje = this.napraviInput('emailInput', 'Email', 'email');
        this.passPolje = this.napraviInput('passwordInput', 'Password', 'password');        
        
        const loginDugme = this.napraviButton('regButton', 'Register');
    }

    napraviInput(klasa, placeholder, tip) {
        const naziv = document.createElement('input');
        naziv.className = klasa; // Nema potrebe za `${klasa}`
        naziv.placeholder = placeholder;
        naziv.type = tip;
        this.kontejner.appendChild(naziv);
        return naziv;
    }

    napraviButton(klasa, inerText) {
        const dugme = document.createElement('button');
        dugme.className = klasa;
        dugme.innerText = inerText;
        
        this.kontejner.appendChild(dugme);
        
        dugme.onclick = async (ev) => {
            ev.preventDefault();

            // ISPRAVKA 2: Direktno vadimo vrednosti iz sačuvanih elemenata
            // i koristimo .trim() da obrišemo slučajne razmake
            const ime = this.imePolje.value.trim();
            const prezime = this.prezimePolje.value.trim();
            const email = this.emailPolje.value.trim();
            const password = this.passPolje.value.trim();
            
            const url = "https://localhost:7080/api/Korisnik/registracija";

            // ISPRAVKA 3: Čistiji način pravljenja objekta (nema potrebe za `${}`)
            const noviKorisnik = {
                id: 0,
                ime: ime,
                prezime: prezime,
                email: email,
                password: password
            };
           
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(noviKorisnik)
                });

                if (response.ok) {
                    window.location.href ="index.html"
                    alert("Uspesno si registrovan");
                    this.imePolje.value = "";
                    this.prezimePolje.value = "";
                    this.emailPolje.value = "";
                    this.passPolje.value = "";
                } else {
                    alert("Greška na serveru. Status: " + response.status);
                }

            } catch (error) {
                // ISPRAVKA 4: alert prima samo jedan string. error objekat štampamo u konzolu
                console.error(error);
                alert("Greška u komunikaciji sa mrežom: " + error.message);
            }
        };

        return dugme;
    }
}