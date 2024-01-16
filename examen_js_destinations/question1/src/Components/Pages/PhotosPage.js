// import Navigate from '../Router/Navigate';
import places from '../../utils/places';
import { clearPage } from '../../utils/render';

const PhotosPage = () => {
  clearPage();
  renderCaroussel(2);
};

function renderCaroussel(no) {
  const main = document.querySelector('main');
  main.innerHTML = `<div class="container text-center">
    <img src="${places[no].image}">
    <br>
    <div class="mt-4"><h5>${places[no].name}</h5></div>
    <br>
    <div class="mt-2">
      <button class="btn btn-primary" id="pre">Previous</button>
      <button class="btn btn-primary" id="next">Next</button>
    </div>
  </div>`;

  
  const previousButton = document.getElementById('pre');
  if (no === 0) {
    previousButton.disabled = true;
  }
  previousButton.addEventListener('click', () => {
    if (no > 0){
      renderCaroussel(no - 1)
    }
  });
  const nextButton = document.getElementById('next');
  if (no === places.length - 1) {
    nextButton.disabled = true;
  }
  nextButton.addEventListener('click', () => {
    if (no < places.length - 1){
      renderCaroussel(no + 1)
    }
  });
}

export default PhotosPage;
