
console.log("sort Hello")

document.getElementById("OrdinaTitolo").addEventListener("click", function() {


    const table = document.getElementById("bookTable");
    const tbody = table.querySelector("tbody");

    const rows = Array.from(tbody.rows);

    rows.sort((rowA, rowB) => {
        const titleA = rowA.cells[0].textContent.trim().toLowerCase();
        const titleB = rowB.cells[0].textContent.trim().toLowerCase();

        return titleA.localeCompare(titleB);
    });


   insert(tbody,rows)
});


document.getElementById("OrdinaAnno").addEventListener("click", function() {

    const table = document.getElementById("bookTable");
    const tbody = table.querySelector("tbody");

    const rows = Array.from(tbody.rows);

    rows.sort((rowA, rowB) => {
        const yearA = parseInt(rowA.cells[1].textContent.trim(), 10);
        const yearB = parseInt(rowB.cells[1].textContent.trim(), 10);

        return yearA - yearB;
    });

   insert(tbody,rows)
});

function insert(tbody,rows){
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    // Riaggiunge le righe ordinate al tbody
    rows.forEach(row => tbody.appendChild(row));
}