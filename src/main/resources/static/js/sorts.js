console.log("helo")

document.getElementById("OrdinaTitolo").addEventListener("click", function() {
    // Seleziona la tabella e il corpo della tabella (tbody)
    const table = document.getElementById("bookTable");
    const tbody = table.querySelector("tbody");

    // Converte le righe del tbody in un array
    const rows = Array.from(tbody.rows);

    // Ordina le righe in base al testo della prima cella (Titolo)
    rows.sort((rowA, rowB) => {
        const titleA = rowA.cells[0].textContent.trim().toLowerCase();
        const titleB = rowB.cells[0].textContent.trim().toLowerCase();

        return titleA.localeCompare(titleB); // Confronta in ordine alfabetico
    });

    // Rimuove tutte le righe dal tbody
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    // Riaggiunge le righe ordinate al tbody
    rows.forEach(row => tbody.appendChild(row));
});

document.getElementById("OrdinaAnno").addEventListener("click", function() {
    // Seleziona la tabella e il corpo della tabella (tbody)
    const table = document.getElementById("bookTable");
    const tbody = table.querySelector("tbody");

    // Converte le righe del tbody in un array
    const rows = Array.from(tbody.rows);

    // Ordina le righe in base al testo della prima cella (Titolo)
    rows.sort((rowA, rowB) => {
        const titleA = parseInt(rowA.cells[1].textContent.trim().toLowerCase());
        const titleB = parseInt(rowB.cells[1].textContent);

        return titleA.localeCompare(titleB); // Confronta in ordine alfabetico
    });

    // Rimuove tutte le righe dal tbody
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    // Riaggiunge le righe ordinate al tbody
    rows.forEach(row => tbody.appendChild(row));
});

document.getElementById("OrdinaAnno").addEventListener("click", function() {
    // Seleziona la tabella e il corpo della tabella (tbody)
    const table = document.getElementById("bookTable");
    const tbody = table.querySelector("tbody");

    // Converte le righe del tbody in un array
    const rows = Array.from(tbody.rows);

    // Ordina le righe in base al valore numerico della seconda cella (Anno)
    rows.sort((rowA, rowB) => {
        const yearA = parseInt(rowA.cells[1].textContent.trim(), 10);
        const yearB = parseInt(rowB.cells[1].textContent.trim(), 10);

        return yearA - yearB; // Ordina in ordine numerico crescente
    });

    // Rimuove tutte le righe dal tbody
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    // Riaggiunge le righe ordinate al tbody
    rows.forEach(row => tbody.appendChild(row));
});
