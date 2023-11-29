
const header = document.querySelector("header");
const menuIcon = document.getElementById("menuMobileIcone");
const menu = document.getElementById("menu");
let vMobileMenu = false;

const navLinks = document.querySelectorAll("header ul li a");
const sections = document.querySelectorAll(".main");

window.addEventListener("load", function () {
    scrollToTop();
});

document.addEventListener("mousemove", function (event) {
    navLinks.forEach(function (lien) {
        if (lien.style.textDecoration == "underline") return;
        if (lien.matches(':hover')) {
            lien.style.color = "indianred";
            lien.style.textDecoration = "none";
            return;
        }
        lien.style.color = "white";
        lien.style.textDecoration = "none";

    });
    linkStyleUpdate();
});

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        if (vMobileMenu) closeMobileMenu();
    })
});

function linkStyleUpdate() {
    var scrollPosition = window.scrollY;

    if (scrollPosition < 75) {
        header.style.width = "90%";
        header.style.height = "4.5rem";
        header.style.top = "2rem";
        header.style.left = "5%";
        header.style.borderRadius = "3rem";
    } else {
        header.style.width = "100%";
        header.style.height = "5rem";
        header.style.top = "0";
        header.style.left = "0";
        header.style.borderRadius = "0";
    }

    let idx = 0;
    const section = document.getElementById("presentation");
    if (section) idx = -1;
    var sectionTop;
    var sectionHeight;

    sections.forEach(section => {
        if (idx == -1) { idx++; return; }
        if (!navLinks[idx]) return;

        if (navLinks[idx].matches(':hover')) return;
        sectionTop = section.offsetTop - 100;
        sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks[idx].style.color = "indianred";
            navLinks[idx].style.textDecoration = "underline";
        } else {
            navLinks[idx].style.color = "white";
            navLinks[idx].style.textDecoration = "none";
        }
        idx++;
    });
}

window.addEventListener("scroll", function () {
    linkStyleUpdate();
});
function scrollToTop() {
    document.documentElement.scrollTop = 0;
}
function displayMobileMenu() {
    vMobileMenu = true;
    menuIcon.style.display = "none";
    menu.style.display = "flex";
}
function closeMobileMenu() {
    vMobileMenu = false;
    if (window.length > 1100) return;
    menuIcon.style.display = "block";
    menu.style.display = "none";
}
function scrollToMainSection(sectionID) {
    console.log(sectionID);
    const section = document.getElementById(sectionID);
    console.log(section.innerHTML);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
}
function openLinkedIn() {
    window.open("https://www.linkedin.com/in/theo-engelaere", '_blank');
}
function downloadCV() {
    var pdfURL = './download/CV_Theo_Engelaere_2023.pdf';
    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'CV_Theo_Engelaere_2023.pdf';
    link.target = '_blank';
    link.click();
}