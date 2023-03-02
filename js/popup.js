let loginButton = document.querySelector('.login_button');
let loginPopUp = document.querySelector('.login_popup');
let closeBut = document.querySelector('.popup_close');

console.log(loginButton)
console.log(loginPopUp)

loginButton.addEventListener('click', showPopUp);
closeBut.addEventListener('click', close);

function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('show-popup');
}

function close() {
    loginPopUp.classList.remove('show-popup');
}

loginPopUp.addEventListener('click', (e) => {
    if (e.target.classList.contains('show-popup')) {
        close();
    }
})

