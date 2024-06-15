
let container = document.querySelector(".output-container");
const img = document.querySelector("#output-img");
const button  = document.querySelector("#get");
const note = document.querySelector("#note")


async function getData() {
	 
	const userInput = document.querySelector("#input").value;
	const url = `https://instagram-post-downloader.p.rapidapi.com/?url=${userInput}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e10c370a4cmsh563320f27130cedp1f821ejsn928c80c68175',
		'X-RapidAPI-Host': 'instagram-post-downloader.p.rapidapi.com'
	}
};

userInput.value ="";
    const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
		
	    let a = document.createElement("a");
		a.innerHTML = "download";
		a.href = `${result.data[0].download}`;
		let image = document.createElement('img');
		image.classList.add("img")
		image.src=`${result.data[0].thumbnail}`;
		container.appendChild(image);
		container.appendChild(a);
	
		let second = 10;
		userInput.disabled = true;

		const interval = setInterval(() => {
			second --;
			note.textContent = `Try after ${second} second`
			if(second === 0) {
				clearInterval(interval);
				userInput.disabled = false;
				note.textContent = "";
			}
		}, 1000);
}
	
// navbar

const items2 = document.querySelector(".items2");

let mode = "open";

function showMenu() {
	if(mode === "open") {
		items2.style.display = "block";
	   items2.style.height = "80px";
	   mode ="close";
	}
	else if(mode === "close") {
		items2.style.display = "none";
	   items2.style.height = "0px";
	   mode ="open";
	}
	
}