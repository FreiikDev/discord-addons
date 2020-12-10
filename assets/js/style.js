function toggle_light_mode() {

    var app = document.getElementsByTagName("BODY")[0];

    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("data-light-mode", "light");
    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("data-light-mode", "dark");
    }
}


var app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "dark") {
    app.setAttribute("data-light-mode", "dark");
}