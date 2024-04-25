const $btnSignIn = document.querySelector('.sign-in-btn');
const $btnSignUp = document.querySelector('.sign-up-btn');
const $signUp = document.querySelector('.sign-up');
const $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});

const $registerButton = document.querySelector('.sign-up .formulario input[type="button"]');

$registerButton.addEventListener('click', () => {
    const $nameInput = document.querySelector('.sign-up .formulario input[type="text"]');
    const $emailInput = document.querySelector('.sign-up .formulario input[type="email"]');
    const $passwordInput = document.querySelector('.sign-up .formulario input[type="password"]');
    
    if ($nameInput.value.trim() === '' || $emailInput.value.trim() === '' || $passwordInput.value.trim() === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
      
        console.log('Formulário enviado!');
    }
});