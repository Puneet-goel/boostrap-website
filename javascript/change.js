
let divElement = document.getElementById("header").offsetHeight;

// margin for carousel
// Setting margin by getting navbar height 
$("#example").css("margin-top",`${divElement}px`); 


//Q idk y arrow function is not working here
function showAlert(){
    alert(document.getElementById("search-input").value);
}

const purchase = () => {
	 alert("No items are added");
}