import places from '../../utils/places';

const HomePage = () => {
  renderHomePage();
};

function renderHomePage() {
  const main = document.querySelector('main');
  main.innerHTML = `
  <div class="container"><h1 class="text-center">Places to visit</h1>
  </div>`;
  places.forEach(p => {
    main.innerHTML += `<h4 class="text-center mt-3 mb-3">${p.name}</h2>`;
  });
}


export default HomePage;
