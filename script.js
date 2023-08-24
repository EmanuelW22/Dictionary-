let inputWord = document.getElementById("inputWord");
let btnWord = document.getElementById("btnWord");
let searchWord = document.getElementById("searchWord");
let btnSearch = document.getElementById("bntSearch");
let messageContainer = document.getElementById("messageContainer");
let messageElement = document.getElementById("message");

let dictionary = new Set();

btnWord.addEventListener("click", function () {
    let word = inputWord.value.trim();
    if (word !== "") {
        dictionary.add(word);
        inputWord.value = "";
        showMessage(`The word "${word}" has been added to the dictionary!`);
    }
});

btnSearch.addEventListener("click", function () {
    let wordToSearch = searchWord.value.trim();
    if (wordToSearch !== "") {
        if (dictionary.has(wordToSearch)) {
            showMessage(`Word "${wordToSearch}" is in the dictionary.`);
        } else {
            showMessage(`Word "${wordToSearch}" is not in the dictionary.`);
        }
        searchWord.value = "";
    }
});

function showMessage(message) {
    messageElement.textContent = message;
    messageContainer.style.display = "block";
    setTimeout(() => {
        messageContainer.style.display = "none";
        messageElement.textContent = "";
    }, 2000);
}
