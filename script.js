let inputWord = document.getElementById("inputWord");
let searchWord = document.getElementById("searchWord");
let messageContainer = document.getElementById("messageContainer");
let messageElement = document.getElementById("message");

let dictionary = new Set();

function addWord() {
    let word = inputWord.value.trim();
    if (word !== "") {
        dictionary.add(word);
        inputWord.value = "";
        showMessage(`The word "${word}" has been added to the dictionary!`);
    }
}

function searchWordInDictionary() {
    let wordToSearch = searchWord.value.trim();
    if (wordToSearch !== "") {
        if (dictionary.has(wordToSearch)) {
            showMessage(`Word "${wordToSearch}" is in the dictionary.`);
        } else {
            showMessage(`Word "${wordToSearch}" is not in the dictionary.`);
        }
        searchWord.value = "";
    }
}

function showMessage(message) {
    messageElement.textContent = message;
    messageContainer.style.display = "block";
    setTimeout(() => {
        messageContainer.style.display = "none";
        messageElement.textContent = "";
    }, 2000);
}
