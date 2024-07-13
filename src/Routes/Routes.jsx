import {createBrowserRouter} from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';
import Services from '../Components/Services/Services';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/services',
          element: <Services></Services>
        }
    ]
  },
]);

export default router;
