import { lazy } from 'react';
import App from '../App';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const AboutPage = lazy(() => import('../pages/About/AboutPage'));
const ProjectsPage = lazy(() => import('../pages/Projects/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('../pages/Projects/ProjectDetailPage'));
const ContactPage = lazy(() => import('../pages/Contact/ContactPage'));

const MainRoutes = {
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
    {
      path: '/projects',
      element: <ProjectsPage />
    },
    {
      path: '/projects/:id',
      element: <ProjectDetailPage />
    },
    {
      path: '/contact',
      element: <ContactPage />
    }
  ]
};

export default MainRoutes;
