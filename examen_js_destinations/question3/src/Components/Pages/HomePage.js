const HomePage = () => {
  const main = document.querySelector('main');

  main.innerHTML = '<ul id ="list">Liste des destinations</ul>';

  fetch('https://places-exam-api.azurewebsites.net/places')
    .then((response) => response.json())
    .then((data) => {
      const listContainer = document.getElementById('list');
      data.forEach((place) => {
        // Créer un élément de liste
        const listItem = document.createElement('li');

        // Définir le contenu textuel de l'élément de liste
        listItem.textContent = place.name;

        // Ajouter l'élément de liste au conteneur de liste
        listContainer.appendChild(listItem);
      });
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Une erreur s\'est produite lors de la récupération des données :', error);
    });
};

export default HomePage;
