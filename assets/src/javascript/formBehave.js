const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const closeSignUp = document.querySelectorAll('[data-close-button]')
const openSignUp = document.querySelectorAll('[data-modal-target]');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal);
    console.log("hell")
  })
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal_external.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal_external')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// close sign in
function closeSignInForm(form) {
    if(form == null) return;
    form.classList.remove('active');
}

// open sign up form
openSignUp.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
        const toCloseSignIn = button.closest('.modal_external');    
        closeSignInForm(toCloseSignIn);
    });
});

closeSignUp.forEach(button =>{
    button.addEventListener('click', ()=>{
        const modal = button.closest('.modal_external_signUp')
        closeModal(modal);
    });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal_external_signUp.active')
  modals.forEach(modal => {
    closeModal(modal)
  });
});

// contact form