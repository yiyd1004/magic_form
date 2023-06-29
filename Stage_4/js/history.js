const history = (() => {
    let historyCards = undefined;

    const init = () => {
        updateHistoryView();
    };

    const buildHtml = (id, firstName, lastName, email, phone, company, address) => {
        return `<div class="submit-history-card" id=${id}>
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
                <button class="delete-button" data-form-id="${id}">Delete</button>
                </div>`;
    };

    const updateHistoryView = () => {
        let cardListInHtml = "";
        if (localStorage.getItem("card-data") !== null) {
            historyCards = JSON.parse(localStorage.getItem("card-data"));
            historyCards.forEach((card) =>{
                // cardListInHtml += buildHtml(card.id, card.firstName, card.lastName, card.email, card.phone, card.company, card.address);
                document.querySelector(".submit-history-container").innerHTML += buildHtml(card.id, card.firstName, card.lastName, card.email, card.phone, card.company, card.address);
            });

            // document.querySelector(".submit-history-container").innerHTML = cardListInHtml;
            document.querySelector(".delete-button").addEventListener("click", deleteCardEvent);
        }
    };

    const deleteCardEvent = (event) => {
        deleteCard(event.target.getAttribute("data-form-id"));
    };

    const deleteCard = (cardId) => {
        for (let idx in historyCards) {
            if (historyCards[idx].id === Number(cardId)) {
                historyCards.splice(idx, 1);
                break;
            }
        }

        historyCards.length > 0 ?
            localStorage.setItem("card-data", JSON.stringify(historyCards)) :
            localStorage.removeItem("card-data");

        document.querySelector(".submit-history-container")
            .removeChild(document.getElementById(cardId));
    }

    return {init}
})();
document.addEventListener("DOMContentLoaded", history.init);