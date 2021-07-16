
divElement = document.getElementById("header").offsetHeight;

// margin for carousel
// Setting margin by getting navbar height 
$("#example").css("margin-top",`${divElement}px`); 


// margin for search button
// Setting margin by getting navbar height 
$("#search-button").css("margin-top",`${divElement+40}px`); 

function showAlert() {
    alert(document.getElementById("user-search").value);
}