import { createRoot } from 'react-dom/client';
import App from './pages/App';
import Comments from './pages/Comments';
import {
    createBrowserRouter,
    RouterProvider,
}   from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "story/:storyId",
        element: <Comments />, 
    },
]);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RouterProvider router = {router} />);
