document.querySelector('.copyButton').addEventListener('click', function() {
    // Selecciona el texto del input
    let copyText = document.getElementById('output-text');
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto al portapapeles
    document.execCommand("copy");

    // Muestra el mensaje de feedback
    let feedback = document.querySelector('.copyButton__feedback');
    feedback.classList.add('show');

    // Oculta el mensaje después de 2 segundos
    setTimeout(function() {
        feedback.classList.remove('show');
    }, 2000);
});


// Selecciona todos los botones y el slider
const buttons = document.querySelectorAll('.tab__button');
const slider = document.querySelector('.tab__slider');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Si el botón ya está activo, no hacer nada
    if (this.classList.contains('active')) {
      return;
    }

    // Quitar la clase active de todos los botones
    buttons.forEach(btn => btn.classList.remove('active'));

    // Añadir la clase active al botón clicado
    this.classList.add('active');

    // Mover el slider
    if (this.getAttribute('data-tab') === 'encrypt') {
      slider.style.left = '5px';
    } else {
      slider.style.left = 'calc(50% + 2.5px)'; // Ajuste fino para el desplazamiento
    }
  });
});



