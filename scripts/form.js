// Manage Copyright Date and Last Modified Date in footer
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

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productHTML = document.querySelector("#product-name");

function productTemplate(product) {
    return `<option value="${product.id}">${product.name}</option>`;
}

productHTML.innerHTML += products.map(productTemplate).join("\n");

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", addReview);

function addReview() {
    let reviews = parseInt(localStorage.getItem("numReviews") || "0");
    localStorage.setItem("numReviews", (`${reviews + 1}`));
}