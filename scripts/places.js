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
    
const windchill = document.querySelector("#windchill");
const temperature = 21;
const windSpeed = 11;

function calculateWindChill(temp, wind)
{
    return 13.12 + (.6215 * temp) - (11.37 * (wind ** 0.16)) + (.3965 * temp * (wind ** 0.16))
}

if (temperature <= 10 && windSpeed > 4.8) {
    windchill.textContent = `${calculateWindChill(temperature, windSpeed)}`
}
else {
    windchill.textContent = "N/A";
}