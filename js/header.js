/* Active Menu */
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener('scroll', activeMenu);

/* Sticky Navbar */
const header = document.querySelector("header");
window.addEventListener('scroll', function(){
    header.classList.toggle("sticky", window.scrollY>50)
})

/* Toggle Icon Navbar */
document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.getElementById("menu-icon");
    let navlist = document.querySelector(".navlist");

    if (menuIcon && navlist) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle("bx-x");
            navlist.classList.toggle("open");
        });

        window.addEventListener('scroll', () => {
            menuIcon.classList.remove("bx-x");
            navlist.classList.remove("open");
        });
    } else {
        console.error("Menu icon or navlist not found");
    }
});