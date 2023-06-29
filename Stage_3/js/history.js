const history = (() => {
    let historyCards = undefined;

    const init = () => {
        let cardListInHtml = "";
        if (sessionStorage.getItem("card-data") !== null) {
            historyCards = JSON.parse(sessionStorage.getItem("card-data"));
            historyCards.forEach(function (card) {
                cardListInHtml += buildHtml(card.firstName, card.lastName, card.email, card.phone, card.company, card.address);
            });

            document.querySelector(".submit-history-container").innerHTML = cardListInHtml;
        }
    };

    const buildHtml = (firstName, lastName, email, phone, company, address) => {
        return `<div class="submit-history-card">
                <div><b>First name</b></div>
                <p class="card-first-name">${firstName}</p>
                <div><b>Last name</b></div>
                <p class="card-last-name">${lastName}</p>
                <div><b>Email</b></div>
                <p class="card-email">${email}</p>
                <div><b>Phone</b></div>
                <p class="card-phone">${phone}</p>
                <div><b>Company</b></div>
                <p class="card-company">${company}</p>
                <div><b>Address</b></div>
                <p class="card-address">${address}</p>
                <button class="delete-button">Delete</button>
                </div>`;
    }

    return {init}
})();
document.addEventListener("DOMContentLoaded", history.init);