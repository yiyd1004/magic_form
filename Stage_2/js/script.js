const app = (function() {

    function init() {
        let inputList = document.querySelectorAll("input");
        inputList.forEach(function (node) {
            if (sessionStorage.getItem(node.name) !== undefined) {
                node.value = sessionStorage.getItem(node.name);
            }

            node.addEventListener("input", function(event) {
                sessionStorage.setItem(event.target.name, event.target.value);
            });
        });
    }

    return {init}
})();
document.addEventListener("DOMContentLoaded", app.init);