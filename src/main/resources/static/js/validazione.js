
console.log("Validazione form Hello");

document.getElementById("forMaghi").onsubmit = function (e){
    const nome = document.getElementById("fname").value;
    const cognome = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const bDay = document.getElementById("birthday").value;
    const maghi = document.getElementById("maghi").value;
    const video = document.getElementById("cvFile").value;
    const des = document.getElementById("question").value;


    if(nome == null || nome == "" ||
        cognome == null || cognome == "" ||
        email == null || email == "" ||
        bDay == null || bDay == "" ||
        maghi == null || maghi == "" ||
        video == null || video == "" ||
        des == null || des == ""){
        console.log("no")
        e.preventDefault();
        alert("Tutti i campi devono esserer compilati campi mancanti:");
    }
}