/*
 * Archivo principal de JS
 */
/*
 (function modal(){
	var boxes = Array.from(document.getElementsByClassName("project"));
	var modal = document.getElementById("work-modal");
	var modalBody = document.getElementsByClassName('modal-body')[0];
	var close = document.getElementById("close");
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			event.preventDefault();
			modalBody.innerHTML = box.innerHTML;
			modal.classList.remove("hidden");
			close.addEventListener("click",function(){
				modal.classList.add("hidden");
			});
		});		
	});
})();*/