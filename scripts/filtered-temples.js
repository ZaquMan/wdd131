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

// Hamburger Menu controls
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Temples Array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Boise Idaho",
    location: "Boise, Idaho, United States",
    dedicated: "1984, May, 25",
    area: 35868,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/2018/400x250/4-Boise-Idaho-Temple-1199031.jpg"
  },
  {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah, United States",
    dedicated: "1995, November, 8",
    area: 104000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-766347-wallpaper.jpg"
  },
  {
    templeName: "Seoul Korea",
    location: "Seoul, South Korea",
    dedicated: "1985, December, 14",
    area: 28057,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/400x250/seoul-korea-temple-lds-424784-wallpaper.jpg"
  },
  {
    templeName: "Newport Beach California",
    location: "Newport Beach, California, United States",
    dedicated: "2005, August, 28",
    area: 17800,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/newport-beach-california/400x250/newport-beach-temple-lds-853026-wallpaper.jpg"
  },
];

function templeFigureTemplate(temple) {
	return `<figure>
				<h2>${temple.templeName}</h2>
                <p><span class="subtitle">Location:</span> ${temple.location}<br>
                <span class="subtitle">Dedicated:</span> ${temple.dedicated}<br>
                <span class="subtitle">Size:</span> ${temple.area} sq ft</p>
                <img src=${temple.imageUrl} alt="The ${temple.templeName} temple" loading="lazy">
            </figure>
	`
}

function renderTempleFigures(temples) {
	const html = temples.map(templeFigureTemplate);
	document.querySelector("#temple-images").innerHTML = html.join("");
}

renderTempleFigures(temples);

const allLink = document.querySelector("#all");
allLink.addEventListener("click", () => {
	renderTempleFigures(temples);
});

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
	renderTempleFigures(temples.filter((temple) => temple.dedicated[1] == '8' ));
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
	renderTempleFigures(temples.filter((temple) => temple.dedicated[0] == '2'));
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
	renderTempleFigures(temples.filter((temple) => temple.area > 90000));
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
	renderTempleFigures(temples.filter((temple) => temple.area < 10000));
});