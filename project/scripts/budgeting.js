const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");

const today = new Date();

let modifieddate = new Date(document.lastModified);

currentyear.innerHTML = `${today.getFullYear()}`;

lastmodified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short",
	}).format(modifieddate)} ${new Intl.DateTimeFormat(
	"en-US",
	{
		timeStyle: "medium"
	}).format(modifieddate)}</span>`;
	
const categoryHTML = document.querySelector("#category");
const transactionNameInput = document.querySelector("#transaction-name");
const transactionAmountInput = document.querySelector("#amount");
const transactionCategoryInput = document.querySelector("#category");
const submitButton = document.querySelector("#submit");
const transactionTable = document.querySelector("#transaction-table");
const categoryTable = document.querySelector("#category-table");

let transactionArray = getTransactionList() || [];
let categoryTotalArray = {};
const transactionCategories = [
	{
		id: "income",
		name: "General Income"
	},
	{
		id: "tithing",
		name: "Tithes and Offerings"
	},
	{
		id: "housing",
		name: "Housing"
	},
	{
		id: "food",
		name: "Food"
	},
	{
		id: "transportation",
		name: "Transportation"
	},
	{
		id: "utilities",
		name: "Utilities"
	},
	{
		id: "insurance",
		name: "Insurance"
	},
	{
		id: "savings",
		name: "Savings"
	},
	{
		id: "personal",
		name: "Personal Expenses"
	},
	{
		id: "medical",
		name: "Medical"
	},
	{
		id: "entertainment",
		name: "Entertainment"
	},
	{
		id: "emergency",
		name: "Emergencies"
	},
	{
		id: "misc",
		name: "Miscellaneous Expenses"
	},
];

function categoryTemplate(category)
{
	return `<option value="${category.id}">${category.name}</option>`;
}

categoryHTML.innerHTML += transactionCategories.map(categoryTemplate).join("\n");

transactionArray.forEach(transaction => {
	displayList(transaction);
});

updateCategoryTable();

submitButton.addEventListener("click", () => {
	if (transactionNameInput.value != "" &&
		transactionAmountInput != "" &&
		transactionCategoryInput != "")
	{
		let newTransaction = [transactionNameInput.value,
		parseFloat(transactionAmountInput.value).toFixed(2),
		transactionCategoryInput.value
		];
		displayList(newTransaction);
		transactionArray.push(newTransaction);
		setTransactionList();
		updateCategoryTable();
		transactionNameInput.value = "";
		transactionAmountInput.value = "";
		transactionCategoryInput.value = "";
		transactionNameInput.focus();
	}
});

function displayList(item) {
	const tableRow = transactionTable.insertRow()
	const deleteBtn = document.createElement("button");

	//Add transaction details, with custom formatting for each cell
	let newCell = tableRow.insertCell();
	let newText = document.createTextNode(item[0]);
	newCell.appendChild(newText);
	newCell = tableRow.insertCell();
	newText = document.createTextNode(`$${item[1]}`);
	newCell.appendChild(newText);
	newCell = tableRow.insertCell();
	newText = document.createTextNode(transactionCategories.find(tranCat => tranCat.id === item[2])["name"]);
	newCell.appendChild(newText);

	deleteBtn.textContent = "❌";
	deleteBtn.classList.add("delete");
	let deleteCell = tableRow.insertCell();
	deleteCell.appendChild(deleteBtn);

	deleteBtn.addEventListener("click", () => {
		//Something about 
		transactionTable.deleteRow(tableRow.rowIndex - 1);
		deleteTransaction(item);
		updateCategoryTable();
		transactionNameInput.focus();
	});
}

function setTransactionList() {
	localStorage.setItem("transaction-list", JSON.stringify(transactionArray));
}

function getTransactionList() {
	return JSON.parse(localStorage.getItem("transaction-list"));
}

function deleteTransaction(transaction) {
	transactionArray = transactionArray.filter(item => item !== transaction);
	setTransactionList();
}

function updateCategoryTable() {
	//Reset the array
	categoryTotalArray = {};
	if (transactionArray.length > 0) {
		transactionArray.forEach(transItem => {
			if (transItem[2] in categoryTotalArray) {
				categoryTotalArray[transItem[2]] += parseFloat(transItem[1]);
			}
			else categoryTotalArray[transItem[2]] = parseFloat(transItem[1]);
		});
	}
	displayCategoryTotalArray();
}

function displayCategoryTotalArray() {
	let total = 0.00;
	categoryTable.innerHTML = "<div>Category</div>\n<div>Total</div>\n";
	for (const [key, val] of Object.entries(categoryTotalArray)) {
		categoryTable.innerHTML += `<div>${transactionCategories.find(tranCat => tranCat.id === key)["name"]}</div>\n<div>$${val.toFixed(2)}</div>\n`;
		total += val;
	}
	categoryTable.innerHTML += `<div>Total</div>\n<div>$${total.toFixed(2)}</div>\n`;
}