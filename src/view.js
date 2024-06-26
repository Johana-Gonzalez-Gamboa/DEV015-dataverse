
export const renderItems = (data) => {

  // Crear un elemento <ul>
  const ul = document.createElement('ul');
  ul.classList.add('card-container');

  // Recorrer la data y crear un elemento <li> para cada elemento de la data
  data.forEach(item => {
    const li = document.createElement('li');// Crear el contenido del <li> con la información del item
    li.classList.add('card-list'); //agregar estilo a los li
    const content = `
          <div itemscope itemtype="http://schema.org/Person">
            <div class="div-item">
              <img itemprop="image" src="${item.imageUrl}" alt="${item.name}">
            </div>
            <h2 itemprop="name">${item.name} (${item.shortDescription})</h2>
          </div>
          <div class="item-facts">
            <p class="facts"><strong>Cumpleaños:</strong> <span itemprop="birthDate">${item.facts.fechaDeNacimiento}</span></p>
            <p class="facts"><strong>Signo Zodiacal:</strong> <span itemprop="zodiacSign">${item.facts.signoZodiacal}</span></p>
            <p class="facts"><strong>Tipo de Guardiana:</strong> <span itemprop="guardianType">${item.facts.tipoDeGuardiana}</span></p>
          </div>
        
      `;
    li.innerHTML = content;
    // Agregar el <li> al <ul>
    ul.appendChild(li);
  });

  return ul;


}
//li.classList.add('card-container'); //agregar estilo a los li
