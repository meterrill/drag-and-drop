window.onload = function() {
	function DisplayFormValues()
	{
			var txt = '';
			var elem = document.getElementById('frmMain').elements;
			for(var i = 0; i < elem.length; i++)
			{
					txt += "<b>Name:</b>" + " " + elem[i].name;
			}
			document.getElementById('lblValues').innerHTML = txt;
	}

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
