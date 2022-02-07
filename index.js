function darktheme() {
	var element = document.body;
	element.classList.toggle("dark-theme")

	if (element.className == "dark-theme") {
		document.getElementById('toggle').innerHTML = "Toggle Light Theme"
	}
	else {
		document.getElementById('toggle').innerHTML = "Toggle Dark Theme"
	}
}