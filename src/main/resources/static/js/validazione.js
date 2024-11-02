
console.log("FUNZIA");

document.getElementById("forMaghi").onsubmit = function (e){
    var nome = document.getElementById("fname").value;
    var cognome =document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var bDay = document.getElementById("birthday").value;
    var maghi = document.getElementById("maghi").value;
    var video = document.getElementById("cvFile").value;
    var des = document.getElementById("question").value;


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