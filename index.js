function collapse(button) {
	button.classList.toggle("active");
	var content = button.nextElementSibling;
	if (content.style.maxHeight != "0px") {
		content.style.maxHeight = "0px";
	} else {
		content.style.maxHeight = content.scrollHeight + "px";
	}
}
