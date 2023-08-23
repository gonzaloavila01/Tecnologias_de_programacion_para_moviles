
// Realizar una solicitud HTTP GET a la API de Rick and Morty
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    // Lista de personajes
    const lista = data.results;
    console.log('Personajes:', lista);
    
    // Filtrar personajes con ID par
    const idPar = lista.filter(character => character.id % 2 === 0);
    console.log('Personajes con ID par:', idPar);

    const charactersType = lista.map(character => ({ ...character }));

    // Asignar "Programación Móvil" a personajes con type vacío
    charactersType.forEach(character => {
      if (character.type === '') {
        character.type = 'Programación Móvil';
      }
    });

    console.log('Personajes con tipo actualizado:', charactersType);

    // Crear un arreglo de objetos con información específica
    const charactersInfo = charactersType.map(character => {
      return {
        nombre: character.name,
        episodios: character.episode.length,
        masDeCincoEpisodios: character.episode.length > 5
      };
    });
    console.log('Información de personajes:', charactersInfo);
  })
  .catch(error => console.error('Error:', error));