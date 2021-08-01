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

const storeData = (event) => {
	event.preventDefault();
	sessionStorage.setItem("name",(event.target.name.value));
	sessionStorage.setItem("password",(event.target.password.value));
	location.replace("./index.html");
}


//user avatar 
const userLogin = () => {
	$(document).ready(function(){
		let x = sessionStorage.getItem("name");
		if(x===null){
			return;
		}

	    let initials = x.charAt(0).toUpperCase();
	    x = $('#profileImage').text(initials);
	    
	    $("#profileImage").css("background-color","#673AB7");
	    $("#profileImage").css("color","floralwhite");
	});
}

const timerforSpinner = () => {
	$("#aboutLoadingDiv").append('<div class="spinner-border text-danger"></div>');
	setTimeout(() => {
		$("#aboutLoadingDiv").empty();
		$("#aboutLoadingDiv").append('<img id="about-img" src="./public/about.jpg" alt="about">');
	}, 1000);
}