const mkLibrary = () => {
  /* invia richiesta */
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((responseObj) => {
      console.log("Response Object", responseObj);
      if (responseObj.ok) {
        return responseObj.json();
      } else {
        throw new Error("Errore nel reperimento dei dati");
      }
    })
    /* qui arriva l'oggetto */
    .then((books) => {
      /* controllo il dato */
      console.log("books", books);

      /* creo nodo contenitore card */

      const rowBooks = document.getElementById("books_cont");

      /* Utilizziamo il dato utilizzando .data per accedere all'array e cicliamo*/

      books.forEach((currentBook) => {
        const col = document.createElement("div"); /* creazione col */

        col.classList.add("col");

        const card = document.createElement("div"); /* creazione card */

        card.classList.add("card");

        col.appendChild(card);
        /*  */
        const image = document.createElement("img");
        image.src = currentBook.img;

        card.appendChild(image);

        const cardbody = document.createElement("div");
        cardbody.classList.add("card-body");

        card.appendChild(cardbody);

        const bookTitle = document.createElement("h5");
        bookTitle.innerText = currentBook.title;

        cardbody.appendChild(bookTitle);

        const bookPrice = document.createElement("p");
        bookPrice.innerText = currentBook.price;

        cardbody.appendChild(bookPrice);

        const buttonDel = document.createElement("button");
        buttonDel.innerText = "Scarta";
        buttonDel.classList.add("btn", "btn-danger");
        buttonDel.setAttribute("type", "button");

        cardbody.appendChild(buttonDel);

        /* Append */

        rowBooks.appendChild(col);
      });
    })
    .catch((err) => console.log(err));
};

window.addEventListener("DOMContentLoaded", () => {
  mkLibrary();
});
