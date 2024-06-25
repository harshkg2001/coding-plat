import './App.scss';
import LanguageSelector from './components/LanguageSelector';
import Navbar from './components/Navbar';
import AllProblems from './pages/AllProblems';
import Contribute from './pages/Contribute';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Contest from './pages/Contest';
import AllContests from './pages/AllContests';
import {createBrowserRouter, RouterProvider, Route, Outlet} from 'react-router-dom';
import Footer from './components/Footer';
import AllDiscussions from './pages/AllDiscussions';

function Layout()
{
  return (
    <div className='layout'>
      <Navbar/>
      <Outlet className='outlet'/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/problem/:id",
        element: <Problem/>
      },
      {
        path: "/allproblems",
        element: <AllProblems/>
      },
      {
        path: "/contest/:id",
        element: <Contest/>
      },
      {
        path: "/allcontests",
        element: <AllContests/>
      },
      {
        path: '/alldiscussions',
        element: <AllDiscussions/>
      }
    ]
  },
  {
    path: "/contribute",
    element: <Contribute/>
  }
])

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
