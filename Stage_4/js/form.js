const form = (() => {

    const init = () => {
        let inputList = document.querySelectorAll("input");

        inputList.forEach(function (node) {
            if (node.type === "submit") {
                return;
            }

            if (localStorage.getItem(node.name) !== null) {
                node.value = localStorage.getItem(node.name);
            }

            node.addEventListener("input", function(event) {
                localStorage.setItem(event.target.name, event.target.value);
            });
        });

        window.addEventListener("storage", storageEventHandler);
        document.getElementById("submit-button").addEventListener("click", submitEvent);
    }

    const submitEvent = (event) => {
        event.preventDefault();
        let cardData = [];
        if (localStorage.getItem("card-data") !== null) {
            cardData = JSON.parse(localStorage.getItem("card-data"));
        }

        let inputList = document.querySelectorAll("input");
        let newCard = {};

        inputList.forEach((node) => {
            if (node.type === "submit") {
                return;
            }

            newCard[node.id] = node.value;
            node.value = "";

            localStorage.removeItem(node.name);
        });
        newCard["id"] = new Date().getTime();
        cardData.push(newCard);

        localStorage.setItem("card-data", JSON.stringify(cardData));
    };

    const clearForm = () => {
        let inputList = document.querySelectorAll("input");

        inputList.forEach((node) => {
            if (node.type === "submit") {
                return;
            }
            node.value = "";

            localStorage.removeItem(node.name);
        });
    };

    const storageEventHandler = (event) => {
        switch (event.key) {
            case "first-name":
                document.getElementById("firstName").value = localStorage.getItem("first-name");
                break;

            case "last-name":
                document.getElementById("lastName").value = localStorage.getItem("last-name");
                break;

            case "email":
                document.getElementById("email").value = localStorage.getItem("email");
                break;

            case "phone":
                document.getElementById("phone").value = localStorage.getItem("phone");
                break;

            case "company":
                document.getElementById("company").value = localStorage.getItem("company");
                break;

            case "address":
                document.getElementById("address").value = localStorage.getItem('address');
                break;
        }
    };

    return {init}
})();
document.addEventListener("DOMContentLoaded", form.init);