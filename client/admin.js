import { Admin } from "./adminClass.js";
import { LoginPage } from "./loginClass.js";


const sacuvaniKorisnik = localStorage.getItem("UlogovaniKorisnik");

if(!sacuvaniKorisnik){
    document.body.innerHTML="<h1>MORATE SE ULOGOVATI</h1>";
    const login = new LoginPage();
    login.crtaj("admin");
}else{
    const Korisnik = JSON.parse(sacuvaniKorisnik);
    if(Korisnik.email === "admin@admin.com"){
        const glavniDiv = document.createElement("div");
        glavniDiv.classList.add("adminPanel");
        document.body.appendChild(glavniDiv);

        const optionDiv = document.createElement("div");
        optionDiv.classList.add("optionPanel");
        document.body.appendChild(optionDiv);


        const admin = new Admin();
        admin.crtaj();
    }else{
        document.body.innerHTML= "<h1>NEMAS DOZVOLU</h1>"
    }


}




