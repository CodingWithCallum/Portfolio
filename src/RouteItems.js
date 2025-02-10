import Home from './Pages/Home/Home';
import Contact from './Pages/ContactMe/Contact';
import Education from './Pages/Education/Education';
import Experience from './Pages/Experience/Experience';
import Gaming from './Pages/Gaming/Gaming';
import Projects from './Pages/Projects/Project';
import Skills from './Pages/Skills/Skills';

export const RouteItems = [
    {id: 0, path:'home', element:<Home/>},
    {id: 2, path:'education', element:<Education/>},
    {id: 3, path:'experience', element:<Experience/>},
    {id: 4, path:'skills', element:<Skills/>},
    {id: 6, path:'projects', element:<Projects/>},
    {id: 5, path:'gaming', element:<Gaming/>},
    {id: 1, path:'contact-me', element:<Contact/>},
]