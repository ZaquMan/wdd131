const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

let scriptureArray = getScriptureList() || [];

scriptureArray.forEach(scripture => {
    displayList(scripture);
});


button.addEventListener("click", () => {
    if (input.value != "") {
        displayList(input.value);
        scriptureArray.push(input.value);
        setScriptureList();
        input.value = "";
        input.focus();
    }
});

function displayList(item) {
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");

    listItem.textContent = item;
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete");
    listItem.append(deleteBtn);
    list.append(listItem);

    deleteBtn.addEventListener("click", () => {
        list.removeChild(listItem);
        deleteScripture(listItem.textContent);
        input.focus();
    });
}

function setScriptureList() {
    localStorage.setItem("BOM-scripture-list", JSON.stringify(scriptureArray));
}

function getScriptureList() {
    return JSON.parse(localStorage.getItem("BOM-scripture-list"));
}

function deleteScripture(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    scriptureArray = scriptureArray.filter(item => item !== chapter);
    setScriptureList();
}