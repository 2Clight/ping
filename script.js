const btn = document.getElementById('btn');
const email = document.getElementById('email');
const form = document.querySelector('.form');
const error= document.querySelector('.error_msg');
form.addEventListener('submit', function(e) {
    // Prevent default form submission
    console.log('it working'); // Log to console for debugging
    
    if(email.value.trim() == "" || !isValidEmail(email.value)){
        e.preventDefault(); 
        email.classList.add('error_border');
        error.style.display= "block";
        
    }
   
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
