import { clearPage } from '../../utils/render';

const Managequeries = async () => {
  clearPage();
  const requests = await getRequests();
  renderManageQueriesPage(requests);
};

async function getRequests() {
  try {
    const response = await fetch(`http://localhost:3000/queries`);
    if (!response.ok) return '';
    const requests = await response.json();
    return requests;
  } catch (err) {
    console.error('queries::error: ', err);
    throw err;
  }
}

function renderManageQueriesPage(requests) {
  const main = document.querySelector('main');
  main.innerHTML = `
    <div class="container">
      <h2>Manage Queries Page</h2>
      <div class="mt-3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Subject</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  `;

  const tbody = document.querySelector('tbody');
  requests.forEach((r) => {
    tbody.innerHTML += `
      <tr>
        <td>${r.subject}</td>
        <td>
          <select>
            <option value="requested" ${r.status === 'requested' ? 'selected' : ''}>requested</option>
            <option value="accepted" ${r.status === 'accepted' ? 'selected' : ''}>accepted</option>
            <option value="refused" ${r.status === 'refused' ? 'selected' : ''}>refused</option>
            <option value="done" ${r.status === 'done' ? 'selected' : ''}>done</option>
          </select>
        </td>
      </tr>
    `;
  });

}
  

export default Managequeries;
