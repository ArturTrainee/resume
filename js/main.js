window.onload = function() {
	this.setTimeout(showPage, 500);
}

function showPage() {
	document.getElementById("loader").classList.toggle('fade');
	document.getElementById("content").classList.toggle('appear');
}

