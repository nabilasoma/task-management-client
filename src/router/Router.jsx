import { createBrowserRouter } from "react-router-dom";
import Main from "../assets/component/Main/Main";
import Home from "../assets/component/Home/Home";
import GetTask from "../assets/component/GetTask/GetTask";
import UpdateTask from "../assets/component/UpdateTask/UpdateTask";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/gettask',
                element: <GetTask></GetTask>,
                loader: () => fetch('https://task-management-server-puce.vercel.app/task')
            },
            {
                path: '/update/:id',
                element: <UpdateTask></UpdateTask>,
                loader: ({params}) => fetch(`https://task-management-server-puce.vercel.app/task/${params.id}`)
            }

        ]
    },

]);

export default router;