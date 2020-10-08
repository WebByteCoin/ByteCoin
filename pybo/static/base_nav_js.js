const toggleBtn = document.querySelector('.navbar_toogleBnt');
const menu = document.querySelector('.navbar_menu');
const menu = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});


function test() {
    document.getElementById('demo').innerHTML = "1234677";
};

function test2() {
    document.getElementById('demo').innerHTML = "12asda34677";
};