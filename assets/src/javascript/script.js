// behavior 
// form account 
var login_btn = document.getElementById('login-btn');
var showPop = document.getElementById('openCusForm');
login_btn.addEventListener('click', function () {
    showPop.classList.toggle('showPopUp')
});

// close overlay
// var overlay = document.getElementById('overlay');
showPop.addEventListener('click', () =>{
    showPop.classList.remove('showPopUp');
});

// form contact

