import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Gaming from './Pages/Gaming';
import Projects from './Pages/Project';
import Skills from './Pages/Skills';

export const RouteItems = [
    {id: 0, path:'home', element:<Home/>},
    {id: 2, path:'education', element:<Education/>},
    {id: 3, path:'experience', element:<Experience/>},
    {id: 4, path:'skills', element:<Skills/>},
    {id: 6, path:'projects', element:<Projects/>},
    {id: 5, path:'gaming', element:<Gaming/>},
    {id: 1, path:'contact-me', element:<Contact/>},
]