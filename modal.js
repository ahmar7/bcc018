var houseCards = document.querySelectorAll(".house-card");

houseCards.forEach(function (houseCard) {
  houseCard.addEventListener("click", function () {
    var houseInfo = this.querySelector(".house-info");
    var title = houseInfo.querySelector("h3").textContent;
    var location = houseInfo.querySelectorAll("p")[0].textContent;
    var price = houseInfo.querySelectorAll("p")[1].textContent;

    // create modal element
    var modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML =
      '<div class="modal-content">' +
      '<div class="modal-header"><h5 class="modal-title">' +
      title +
      "</h5></div>" +
      '<div class="modal-body"><p>' +
      location +
      "</p><p>" +
      price +
      "</p></div>" +
      "</div>";

    // create close button
    var closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.innerHTML = "&times;";

    // attach close button to modal header
    modal.querySelector(".modal-header").appendChild(closeButton);

    // add click event listener to close button
    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // show modal
    document.body.appendChild(modal);
    modal.style.display = "block";
  });
});
