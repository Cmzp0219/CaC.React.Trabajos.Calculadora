// Obtener el elemento de pantalla de la calculadora
var display = document.getElementById('display');

// Agregar un valor al elemento de pantalla
function addToDisplay(value) {
    display.value += value;
}

// Limpiar el elemento de pantalla
function clearDisplay() {
  display.value = '';
}
// Realizar el cálculo matemático y mostrar el resultado
function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = 'Error';
    }
}

// Obtener todos los botones de la calculadora
var keys = document.querySelectorAll('.keys button');

// Agregar un event listener a cada botón de la calculadora
keys.forEach(function(button) {
    button.addEventListener('click', function(event) {
        // Obtener el valor del botón
        var buttonValue = event.target.innerText;

        // Si el valor del botón es "=", realizar el cálculo
        if(buttonValue === '=') {
            calculate();
        } else {
            // De lo contrario, agregar el valor al elemento de pantalla
            addToDisplay(buttonValue);
        }
    });
});
function handleKeyPress(event) {
  // Obtener el código de la tecla presionada
  var keyCode = event.keyCode;

  // Si la tecla "C" fue presionada, limpiar el elemento de pantalla
  if (keyCode === 67) {
    clearDisplay();
  }
}