
const initial = document.getElementById("aggiungiLibro").innerHTML

// Evento click sul pulsante "Aggiungi un nuovo libro"
document.getElementById("aggiungiLibro").addEventListener("click", function() {


    if(document.getElementById("bookForm").style.display == "block"){
        // Mostra il form per aggiungere un nuovo libro impostando "display: block"
        document.getElementById("bookForm").style.display = "none";
        // nascondi il form per rimuovere il libro
        document.getElementById("eliminaLibro").style.visibility = "visible";

        this.innerHTML = initial

    }else {
        // Mostra il form per aggiungere un nuovo libro impostando "display: block"
        document.getElementById("bookForm").style.display = "block";
        // nascondi il form per rimuovere il libro
        document.getElementById("eliminaLibro").style.visibility = "hidden"

        this.textContent= "Chiudi Form"
    }

});

// Evento submit sul form "newBookForm"
document.getElementById("bookForm").addEventListener("submit", function(event) {
    // Impedisce il comportamento di submit predefinito (invio dei dati)
    event.preventDefault();


    // Recupera i valori inseriti dall'utente nei campi del form
    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const publisher = document.getElementById("publisher").value;

    if(year<0){
        alert("L'anno non può essere negativo")
        return
    }

    document.getElementById("eliminaLibro").style.visibility = "visible"
    document.getElementById("aggiungiLibro").innerHTML = initial
    // Riferimento alla tabella dove verranno aggiunti i nuovi libri
    const tableBody = document.getElementById("bookTable").getElementsByTagName('tbody')[0];

    addNewRowV2(tableBody , title , year , publisher);

    // Nasconde il form di aggiunta libro dopo l'inserimento
    document.getElementById("bookForm").style.display = "none";
    // Reset dei campi del form per future aggiunte
    document.getElementById("newBookForm").reset();
});

function addNewRowV2(tableBody , title, year,publisher){

    // Crea una nuova riga nella tabella
    const newRow = tableBody.insertRow();

    // Creazione delle celle per la nuova riga e inserimento dei dati
    const titleCell = newRow.insertCell(0);    // Cella per il titolo
    const yearCell = newRow.insertCell(1);     // Cella per l'anno
    const publisherCell = newRow.insertCell(2); // Cella per la casa editrice

    // Assegnazione dei valori alle celle della nuova riga
    titleCell.textContent = title;  // Inserisce il titolo nella prima cella
    yearCell.innerHTML = `<span class="badge bg-info">${year}</span>`; // Inserisce l'anno con badge
    publisherCell.textContent = publisher; // Inserisce la casa editrice nella terza cella


    console.log('Adding new Row , with method 2');
}


function sortByName(tableBody, title){

}

function sortByYear(tableBody, year) {

}



////////////

const initial2 = document.getElementById("eliminaLibro").innerHTML;
// DELETE ROW ON DEMAND
document.getElementById("eliminaLibro").addEventListener("click", function() {

    if(document.getElementById("removeBookForm").style.display == "block"){
        // Mostra il form per aggiungere un nuovo libro impostando "display: block"
        document.getElementById("removeBookForm").style.display = "none";
        // nascondi il form per rimuovere il libro
        document.getElementById("aggiungiLibro").style.visibility = "visible";

        this.innerHTML = initial2

    }else {
        // Mostra il form per aggiungere un nuovo libro impostando "display: block"
        document.getElementById("removeBookForm").style.display = "block";
        // nascondi il form per rimuovere il libro
        document.getElementById("aggiungiLibro").style.visibility = "hidden"

        this.textContent= "Chiudi Form"
    }
});

document.getElementById("removeBookByNumberForm").addEventListener("submit",function(event){
    event.preventDefault(); // Impedisce il submit del form

    // Recupera il numero del libro da rimuovere
    var bookNumb = parseInt(document.getElementById("bookNumber").value);
    var bookNumber = bookNumb+1
    // Ottiene tutte le righe della tabella, escluse le intestazioni
    const rows =document.getElementById('bookTable').querySelectorAll('tr');


    alert(rows.length)
    alert(bookNumber)
    // Controlla se il numero è valido
    if (bookNumber > 0 && bookNumber <= rows.length) {
        rows[bookNumber - 1].remove(); // Rimuove la riga corrispondente (indice base 0)
        document.getElementById("removeBookForm").style.display = "none"; // Nasconde il form
        document.getElementById("aggiungiLibro").style.visibility = "visible";
        document.getElementById("removeBookByNumberForm").reset(); // Resetta il campo del form
        document.getElementById("eliminaLibro").innerHTML = initial2
    } else {
        alert("Numero libro non valido!"); // Avviso per numero non valido
    }
})

// Funzione per rimuovere il libro in base al numero
function removeBookByNumber(event) {

}


// Funzione per eliminare la riga con opzioni diverse
function deleteRow(button) {
    const row = button.parentNode.parentNode; // Trova la riga corrente

    // Opzione 1: Rimuove la riga direttamente
    row.parentNode.removeChild(row);

}


