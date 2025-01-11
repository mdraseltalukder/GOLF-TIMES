import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Service from './Pages/Service';



const router =createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
   
      {
        path: "/*",
        element: <NotFound />,
      }
   
    ]

  }
])

export default function App() {
  return (
   <>
      <RouterProvider router={router} />
   </>
  )
}
