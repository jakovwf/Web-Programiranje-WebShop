export class LoginPage{
    constructor(){
        this.kontejner = null;
    }   

    crtaj(page){
        this.kontejner = document.createElement('div');
        this.kontejner.className = 'login';
        document.body.appendChild(this.kontejner);

        const emailInput = document.createElement('input');
        emailInput.className = 'emailInput';
        emailInput.placeholder = 'Email';
        this.kontejner.appendChild(emailInput);

        const passwordInput = document.createElement('input');
        passwordInput.className = 'passwordInput';
        passwordInput.placeholder = 'Password';
        this.kontejner.appendChild(passwordInput);

        const loginButton = document.createElement('button');
        loginButton.className = 'loginButton';
        loginButton.innerText = 'Login';
        loginButton.onclick = async(ev)=>{
            ev.preventDefault();

            const unetiEmail = emailInput.value;
            const unetaSifra = passwordInput.value;

            if(unetaSifra===""||unetiEmail===""){
                alert("Unesi sifru majmuneee");
                return;
            }
            try {
                const url = `https://localhost:7080/api/Korisnik/login/${encodeURIComponent(unetiEmail)}/${encodeURIComponent(unetaSifra)}`;
                const response = await fetch(url,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    }}
                );

                if(response.ok){
                    const korisnik = await response.json();
                    localStorage.setItem("UlogovaniKorisnik", JSON.stringify(korisnik));
                    window.location.href=`${page}.html`;
                    
                    alert("Uspesno si prijavljen");

                }else if(response.status === 401){
                    alert("Nemas acc sine");
                }else{
                    alert("Doslo je do greske na serveru");
                }


            } catch (error) {
                console.error("Greska sa serverom",error);
                alert("Nije dobar net");
            };
        }
        this.kontejner.appendChild(loginButton);

    }
}