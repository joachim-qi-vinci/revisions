import HomePage from '../Pages/HomePage';
import ManageQueries from '../Pages/ManageQueries';
import CreateQuery from '../Pages/CreateQuery';


const routes = {
  '/': HomePage,
  '/queries': ManageQueries,
  '/queries/create': CreateQuery,
};

export default routes;
