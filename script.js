// Selecciona todos los botones y el slider
const buttons = document.querySelectorAll('.tab__button');
const slider = document.querySelector('.tab__slider');
const titleInput = document.querySelector('.input__title');
let actionBtn = document.getElementById('action-button');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
let currentMode = 'encrypt';

// Evento para cambiar la interfaz en a encriptador o desencriptador
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
    currentMode = this.dataset.tab;
    titleInput.innerHTML = `Text to ${currentMode}`;
    inputText.value = "";
    outputText.value = "";

    actionBtn.textContent = currentMode.charAt(0).toUpperCase() + currentMode.slice(1);

    // Mover el slider
    if (this.getAttribute('data-tab') === 'encrypt') {
      slider.style.left = '5px';
    } else {
      slider.style.left = 'calc(50% + 2.5px)'; // Ajuste fino para el desplazamiento
    }
  });
});

// Evento para cambiar de modo a encriptador o desencriptador
actionBtn.addEventListener('click', () => {
  const text = inputText.value;
  outputText.value = currentMode === 'encrypt' ? encrypt(text) : decrypt(text);
});

// Función para validar el texto
const textValidate = (text) => {
  return /^[a-z]+$/.test(text);
};

// Función para encriptar el texto
const encrypt = (text) => {
  if(textValidate(text)){
    return text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  }else if(text === ''){
    return 'Debe ingresar un texto';
  }else{
    return 'No se aceptan mayúsculas ni caracteres especiales';
  }
};

// Función para desencriptar el texto
const decrypt = (text) => {
  if(textValidate(text)){
    return text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  }else{
    return 'No se aceptan mayúsculas ni caracteres especiales';
  }
};



// Evento para copiar el texto resultado y mostrar un pop-up
document.querySelector('.copyButton').addEventListener('click', function() {
  // Selecciona el texto del input
  let copyText = document.getElementById('output-text');
  copyText.select();

  // Copia el texto al portapapeles
  document.execCommand('copy');

  // Muestra el mensaje de feedback
  let feedback = document.querySelector('.copyButton__feedback');
  feedback.classList.add('show');

  // Oculta el mensaje después de 2 segundos
  setTimeout(function() {
      feedback.classList.remove('show');
  }, 2000);
});


