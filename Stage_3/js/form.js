const form = (() => {

    const init = () => {
        let inputList = document.querySelectorAll("input");
        inputList.forEach(function (node) {
            if (node.type === "submit") {
                return;
            }

            if (sessionStorage.getItem(node.name) !== null) {
                node.value = sessionStorage.getItem(node.name);
            }

            node.addEventListener("input", function(event) {
                sessionStorage.setItem(event.target.name, event.target.value);
            });
        });

        document.getElementById("form").addEventListener("submit",submit)
    }

    const submit = (event) => {
        event.preventDefault();

        let cardData = [];
        if (sessionStorage.getItem("card-data") !== null) {
            cardData = JSON.parse(sessionStorage.getItem("card-data"));
        }

        let inputList = document.querySelectorAll("input");
        let newCard = {};

        inputList.forEach((node) => {
            if (node.type === "submit") {
                return;
            }

            newCard[node.id] = node.value;
            node.value = "";
        });
        cardData.push(newCard);

        sessionStorage.setItem("card-data", JSON.stringify(cardData));
    }

    return {init}
})();
document.addEventListener("DOMContentLoaded", form.init);