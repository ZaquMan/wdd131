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
	
//I chose to break the javascript files up into three for two reasons.
//Having a single file was becoming too large to manage, and the actions
//running on one page did not apply to the other and was causing issues
//in some cases.