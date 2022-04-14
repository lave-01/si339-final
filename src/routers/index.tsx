
import { Navigate, useRoutes } from 'react-router-dom';
import Layout from '../layout';
import Index from '../pages';
import Exercise from '../pages/exercise';
import Form from '../pages/form';
import More from '../pages/more';
import Reference from '../pages/reference';


export default function routers() {
    return useRoutes([
        { path: '/', element: <Navigate to="/index" /> },
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/index',
                    element: <Index />
                },
                {
                    path: '/exercise',
                    element: <Exercise />
                },
                {
                    path: '/more',
                    element: <More />
                },
                {
                    path: '/reference',
                    element: <Reference />
                },
                {
                    path: '/form',
                    element: <Form />
                },
            ]
        },
    ])
}