function darktheme() {
	var element = document.body;
	element.classList.toggle("dark-theme")

	if (element.classList.contains("dark-theme")) {
		// document.getElementById('toggle').innerHTML = "Dark"
		document.getElementById('togimg').src = "Icons/night.png"
	}
	else {
		// document.getElementById('toggle').innerHTML = "Light"
		document.getElementById('togimg').src = "Icons/day.png"
	}
}
