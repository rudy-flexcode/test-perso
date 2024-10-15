// Sélectionne le bouton et le formulaire
const wilders = document.querySelectorAll('.showForm');
const form = document.getElementById('contactForm');
// Ajoute un écouteur d'événement
for(const wilder of wilders){
    wilder.addEventListener('click', function() {
        if(form.style.display === 'none' || form.style.display === ' '){
            form.style.display = 'block';
        } else{
            form.style.display = 'none';
        }
    } );
}

const submit = document.querySelector('#submit');
submit.addEventListener('click', function () {
    alert('Votre message a été envoyé');
} )