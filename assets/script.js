
let container = document.querySelector(".output-container");
const img = document.querySelector(".img");
const button  = document.querySelector(".download");
const getBtn  = document.querySelector(".get");
const note = document.querySelector("#note")
let icon = document.querySelector("#remove")

async function getData() {	
		note.textContent =`Wait Few Seconds`;

	var userInput = document.querySelector("#input").value;
	const url = `https://instagram-post-downloader.p.rapidapi.com/?url=${userInput}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd2844c999dmsha05b5cd3b0a6f1ap185666jsnbf8be627a3cf',
		'X-RapidAPI-Host': 'instagram-post-downloader.p.rapidapi.com'
	}
};



    const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
		
	 
	   
		img.src=`${result.data[0].thumbnail}`;
		button.href=`${result.data[0].download}`;
		container.style.display = "flex";
		
		button.addEventListener('click',disableimage);
		
		
}

function disableimage() {
	container.style.display ="none";
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


function clearInput() {
	let userIn = document.querySelector("#input");
	userIn.value = '';
	userIn.placeholder = 'Insert intagram link here..'
}
