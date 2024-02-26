function toggleMenu() {
    var menu = document.getElementById("popupMenu");
    var button = document.querySelector('button');
    var body = document.querySelector('body');
    if (menu.style.display === "none") {
        menu.style.display = "block";
        body.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && !button.contains(e.target)) {
                menu.style.display = "none";
            }
        });
    } else {
        menu.style.display = "none";
    }
}

document.querySelector('.navbar span').addEventListener('click', function() {
    window.location.href = "main.html";
});
