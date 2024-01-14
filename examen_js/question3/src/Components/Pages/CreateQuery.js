import { clearPage } from '../../utils/render';

const CreateQuery = () => {
  clearPage();
  renderManageQueriesPage();
};

function renderManageQueriesPage(){
  const main = document.querySelector('main');
  main.innerHTML = `<div class="container">
  <h2>Create Query Page</h2>
   <h6>Subject of your query</h6>
   <div class="mt-3">
    <input type="text" id="subject" name="subject" placeholder="Subject">
    <p>Please provide the subject of your query regarding some new content</p>
    <button type="submit" class="btn btn-primary" id="submit">Submit</button>
    </div>
    <div id="response"></div>
  </div>
  `; 
  const submit = document.querySelector('#submit');
  const subject = document.querySelector('#subject');
  const response = document.querySelector('#response');
  submit.addEventListener('click', async () => {
    fetch('http://localhost:3000/queries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject: subject.value,
        status: 'requested'
      })
    });

    subject.value = '';
    response.innerHTML = 'Your query has been submitted';

    setTimeout(() => {
      response.innerHTML = '';
    }, 2000);
  });
}



export default CreateQuery;
