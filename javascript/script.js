setInterval(() => {
    // To calculate the time difference of two dates
    var time = new Date().getTime() - new Date("12/01/2000").getTime();
    
    // To calculate the no. of days between two dates
    var days = time / (1000 * 3600 * 24);
    
    //To display the final no. of days (result)
    document.getElementById("date").textContent = days.toFixed(5);
}, 100);

var alreadySet = false;

function set() {
    alreadySet = true;
    document.getElementById("iframe").setAttribute("src", "https://www.youtube.com/embed/GF5AjJd6O5U?version=3&autoplay=1&list=PLxUCeVeZhl2fCFMxMlU0T2w40PlWXG4EW&loop=1&showinfo=0&controls=0");
}        

window.addEventListener("click", function(event) {
    if ( !alreadySet )
        set();
        document.getElementById("rainbow").style.display = 'block';

});