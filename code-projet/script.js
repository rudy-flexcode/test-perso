// Sélectionne le bouton et le formulaire
const wilders = document.getElementsByClassName('showForm');
const form = document.getElementById('contactForm');
// Ajoute un écouteur d'événement
wilders.addEventListener('click', function() {
    if(form.style.display === 'none' || form.style.display === ' '){
        form.style.display = 'block';
    } else{
        form.style.display = 'none';
    }
} );