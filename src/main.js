import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';


function load(data) {
  // Mostrar los elementos en la interfaz de usuario
  const ul = renderItems(data);
  // Agregar el <ul> al elemento root
  const rootElement = document.querySelector('#root');
  rootElement.innerHTML = "";
  rootElement.appendChild(ul);  
}

document.getElementById('filterBy').addEventListener('change', function() {
  const dataFiltrada = filterData(data, 'tipoGuardian', this.value);
  load(dataFiltrada);
});

document.getElementById('sortBy').addEventListener('change', function(){
  const sortOrder = this.value;
  const dataOrdenada = sortData(data, 'name', sortOrder);
  load(dataOrdenada);
});

function init() {  
  load(data);
}
// Ejecutar la función de inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);

document.addEventListener('DOMContentLoaded', function() {
  const select = document.getElementById('sortBy'); // Seleccionar el elemento <select> por su id
  select.addEventListener('change', function() { // Agregar un evento 'change' al <select>
    const selectedValue = select.value; // es pa obtener el valor seleccionado del <select>
    const filterBy = 'extraInfo.tipoGuardian'; // El campo por el que filtramos
    const filteredData = filterData(data, filterBy, selectedValue); // es una variable que captura el resultado del proceso de filtrado de datos 
    console.log('Datos filtrados:', filteredData);

  });
});