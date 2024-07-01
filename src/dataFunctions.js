export function filterData(data, filterBy, value) {
  // Verificar que la función está recibiendo los valores
  console.log('Data:', data);
  console.log('Filter By:', filterBy);
  console.log('Value:', value);

  // Filtrar los datos según el campo y el valor proporcionados
  return data.filter(item => {
    // Navegar a través del objeto para llegar al campo especificado
    const keys = filterBy.split('.');
    let fieldValue = item;
    for (const key of keys) {
      fieldValue = fieldValue[key];
      if (!fieldValue) break;
    }
    console.log('Field Value:', fieldValue); // <-- Añade esta línea para imprimir el valor del campo
    return fieldValue === value;
  });
}