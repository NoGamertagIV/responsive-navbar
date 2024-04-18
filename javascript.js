const toggle = document.querySelector('.toggle-btn');
const hamburgerIcon = document.querySelector('.fa-solid.fa-bars');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggle.onclick = function () {
    dropDownMenu.classList.toggle('open');
    if (dropDownMenu.classList.contains('open')) {
        // If the dropdown menu is open, replace the hamburger icon with 'X'
        hamburgerIcon.classList.remove('fa-solid', 'fa-bars');
        hamburgerIcon.classList.add('fa-solid', 'fa-times'); // 'fa-times' is the Font Awesome class for 'X'
    } else {
        // If the dropdown menu is closed, replace 'X' with the hamburger icon
        hamburgerIcon.classList.remove('fa-solid', 'fa-times');
        hamburgerIcon.classList.add('fa-solid', 'fa-bars');
    }
}