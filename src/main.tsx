import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.tsx'
import Home from './components/pages/Home.tsx'
import { Profile } from './components/pages/Profile.tsx'
import { Projects } from './components/pages/Projects.tsx'
// @ts-ignore: no declaration file for TestPage.jsx
import  TestPage  from './components/pages/TestPage.jsx'
import './index.css'

const routes = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/test',
        element: <TestPage />
      }
    ],
    errorElement: <div>404 Not Found</div>
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
