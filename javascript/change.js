const adjust = () => {
	let divElement = document.getElementById("header").offsetHeight;

	// margin for carousel
	// Setting margin by getting navbar height 
	$("#example").css("margin-top",`${divElement}px`); 
}

const toolTip = () => {
	$(document).ready(function(){
		$('[data-toggle="entry"]').tooltip();   
	});
	$(document).ready(function(){
		$('[data-toggle="exit"]').tooltip();   
	});

}

const showAlert = () => {
    alert(document.getElementById("search-input").value);
}

const purchase = () => {
	alert("No items are added");
}

const filter = () => {
	$(document).ready(function(){
		$("#search-input").on("keyup",function(){
			var value = $(this).val().toLowerCase();
			$("#myTable tr").filter(function(){
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
		});
    });
}