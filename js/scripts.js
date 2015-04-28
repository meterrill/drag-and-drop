function DisplayFormValues() {
	var elemArray = [];
	var elem = document.getElementById('eventform').elements;
	for(var i = 0; i < elem.length; i++) {
			elemArray.push(elem[i].id);
	}
	document.getElementById('formValues').innerHTML = elemArray;
}

function makelist() {
	var listContainer = document.createElement("div");
	document.getElementsByTagName("body")[0].appendChild(listContainer);
	var listElement = document.createElement("ul");
	listContainer.appendChild(listElement);
	for(var i = 0; i < elemArray.length; i++) {
		var listItem = document.createElement("li");
		listItem.innerHTML = elemArray[i];
		listElement.appendChild(listItem);
	}
}

window.onload = function() {
	var dropTargets = document.querySelectorAll('#drop-targets li, #drop-targets input');
	var dragElements = document.querySelectorAll('#drag-elements li');
	var elementDragged = null;

	for (var i = 0; i < dragElements.length; i++) {
		dragElements[i].addEventListener('dragstart', function(e) {
			e.dataTransfer.effectAllowed = 'copy';
			e.dataTransfer.setData('text', this.innerHTML);
			elementDragged = this;
		});

		dragElements[i].addEventListener('dragend', function(e) {
			elementDragged = null;
		});
	};

	for (var i = 0; i < dropTargets.length; i++) {
		dropTargets[i].addEventListener('dragover', function(e) {
			if (e.preventDefault) {
				e.preventDefault();
			}
			e.dataTransfer.dropEffect = 'copy';
			return false;
		});

		dropTargets[i].addEventListener('dragenter', function(e) {
			this.className = "form-control over";
		});

		dropTargets[i].addEventListener('dragleave', function(e) {
			this.className = "form-control";
		});

		dropTargets[i].addEventListener('drop', function(e) {
			if (e.preventDefault) e.preventDefault();
	  	if (e.stopPropagation) e.stopPropagation();
			this.className = "form-control";
			this.innerHTML = e.dataTransfer.getData('text');
			return false;
		});
	};
};
