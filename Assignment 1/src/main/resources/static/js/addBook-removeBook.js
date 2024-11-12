
////////// AddBook


const initialAdd = document.getElementById("aggiungiLibro").innerHTML

document.getElementById("aggiungiLibro").addEventListener("click", function() {
    if(document.getElementById("bookForm").style.display == "block"){

        document.getElementById("bookForm").style.display = "none";

        document.getElementById("eliminaLibro").style.visibility = "visible";

        this.innerHTML = initialAdd

    }else {

        document.getElementById("bookForm").style.display = "block";

        document.getElementById("eliminaLibro").style.visibility = "hidden"

        this.textContent= "Chiudi Form"
    }
});


//Effettua i controlli specificati prima di inserire un libro EX: L'anno non può essere un numero negativo
document.getElementById("bookForm").addEventListener("submit", function(event) {

    event.preventDefault();
    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const publisher = document.getElementById("publisher").value;

    if(year<0){
        alert("L'anno non può essere negativo")
        return
    }

    document.getElementById("eliminaLibro").style.visibility = "visible"
    document.getElementById("aggiungiLibro").innerHTML = initialAdd

    const tableBody = document.getElementById("bookTable").getElementsByTagName('tbody')[0];

    addNewRowV2(tableBody , title , year , publisher);

    document.getElementById("bookForm").style.display = "none";

    document.getElementById("newBookForm").reset();
});



function addNewRowV2(tableBody , title, year,publisher){

    const newRow = tableBody.insertRow();

    const titleCell = newRow.insertCell(0);
    const yearCell = newRow.insertCell(1);
    const publisherCell = newRow.insertCell(2);

    titleCell.textContent = title;
    yearCell.innerHTML = `<span class="badge bg-info">${year}</span>`;
    publisherCell.textContent = publisher;

}



//////////// RemoveBook

const initialRemove = document.getElementById("eliminaLibro").innerHTML;
document.getElementById("eliminaLibro").addEventListener("click", function() {

    if(document.getElementById("removeBookForm").style.display == "block"){
        document.getElementById("removeBookForm").style.display = "none";
        document.getElementById("aggiungiLibro").style.visibility = "visible";

        this.innerHTML = initialRemove

    }else {
        document.getElementById("removeBookForm").style.display = "block";

        document.getElementById("aggiungiLibro").style.visibility = "hidden"

        this.textContent= "Chiudi Form"
    }
});

document.getElementById("removeBookByNumberForm").addEventListener("submit",function(event){
    event.preventDefault();

    var bookNumb = parseInt(document.getElementById("bookNumber").value);
    var bookNumber = bookNumb+1
    const rows =document.getElementById('bookTable').querySelectorAll('tr');


    alert(rows.length)
    alert(bookNumber)

    if (bookNumber > 0 && bookNumber <= rows.length) {
        rows[bookNumber - 1].remove();
        document.getElementById("removeBookForm").style.display = "none";
        document.getElementById("aggiungiLibro").style.visibility = "visible";
        document.getElementById("removeBookByNumberForm").reset();
        document.getElementById("eliminaLibro").innerHTML = initialRemove
    } else {
        alert("Numero libro non valido!");
    }
})

