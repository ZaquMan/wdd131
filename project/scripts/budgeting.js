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
	


//Budget Form Spaghetti Code
const inputFields = Array.from(document.querySelectorAll("#budget-calculator input"));
inputFields.forEach(input => {
	input.addEventListener("input", () => { updateForm(); });
});

const tithingCheckbox = document.querySelector("#include-tithing");
tithingCheckbox.addEventListener("click", () => { updateForm() });


const incomeTotal = document.querySelector("#income-total");
const housingExpenseTotal = document.querySelector("#housing-total");
const foodExpenseTotal = document.querySelector("#food-total");
const transportExpenseTotal = document.querySelector("#transport-total");
const healthExpenseTotal = document.querySelector("#health-total");
const personalExpenseTotal = document.querySelector("#personal-total");
const schoolExpenseTotal = document.querySelector("#school-total");
const otherExpenseTotal = document.querySelector("#other-total");
const totalExpenses = document.querySelector("#total-expense");


function updateForm() {
	updateSubset(".income-amount", incomeTotal);
	updateSubset(".housing-expense", housingExpenseTotal);
	updateSubset(".food-expense", foodExpenseTotal);
	updateSubset(".transportation-expense", transportExpenseTotal);
	updateSubset(".health-expense", healthExpenseTotal);
	updateTithing();
	updateSubset(".personal-expense", personalExpenseTotal);
	updateSubset(".school-expense", schoolExpenseTotal);
	updateSubset(".other-expense", otherExpenseTotal);
	updateTotal();
	const incomeBreakdown = document.querySelector("#income-breakdown");
	const expenseBreakdown = document.querySelector("#expense-breakdown");
	const totalBreakdown = document.querySelector("#total-breakdown");

	incomeBreakdown.textContent = incomeTotal.value;
	expenseBreakdown.textContent = totalExpenses.value;
	totalBreakdown.textContent = (parseFloat(incomeTotal.value) - parseFloat(totalExpenses.value)).toFixed(2);
}

function updateSubset(tag, sumElement) {
	const contributors = document.querySelectorAll(`${tag}`);
	let total = 0.0
	contributors.forEach(contributor => { total += parseFloat(contributor.value) || 0 });
	sumElement.value = total.toFixed(2);
}

function updateTithing() {
	const tithingTotal = document.querySelector("#tithing");
	if (tithingCheckbox.checked) {
		tithingTotal.value = (parseFloat(incomeTotal.value) * 0.10).toFixed(2)
	} else {
		tithingTotal.value = 0.00;
	}
}

function updateTotal() {
	let total = 0.0;
	total += parseFloat(housingExpenseTotal.value);
	total += parseFloat(foodExpenseTotal.value);
	total += parseFloat(transportExpenseTotal.value);
	total += parseFloat(healthExpenseTotal.value);
	total += parseFloat(personalExpenseTotal.value);
	total += parseFloat(schoolExpenseTotal.value);
	total += parseFloat(otherExpenseTotal.value);
	totalExpenses.value = total.toFixed(2);
}