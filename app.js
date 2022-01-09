// App.js - backend for the link-shortener site
const shorten = document.querySelector("#shorten")
const link = document.querySelector("#link")
let url
shorten.addEventListener("click", shortenUrl)

function shortenUrl() {
	url = document.querySelector("#url").value
	let body = {
		url: `${url}`,
		domain: `tiny.one`
	}
	
	fetch(`https://api.tinyurl.com/create`, {
		method: `POST`,
		headers: {
			accept: `application/json`,
			authorization: `Bearer c5695b5feadd98dce95621b123222609e2b0035e`,
			'content-type': `application/json`,
		},
		body: JSON.stringify(body)
	})
	.then(response => {
		if (response.status != 200) throw `There was a problem with the fetch functionality. Status code: ${response.status}`;
		return response.json()
	})
	.then(data => {
		link.textContent = data.data.tiny_url
	})
	.catch(error => {
		console.log(error)
		link.textContent = "Invalid URL"
	});
}