window.onload = function() {
	this.setTimeout(showPage, 1000);
}

function showPage() {
	document.getElementById("loader").classList.toggle('fade');
	document.getElementById("content").classList.toggle('appear');
}

