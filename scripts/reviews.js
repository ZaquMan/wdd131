
function getReviewCount() {
    return localStorage.getItem("numReviews") || "0";
}

const reviewCount = document.querySelector("#reviews");
reviewCount.innerHTML = `${getReviewCount()}`;

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
