import ReactDOM from 'react-dom/client'
import './main.css'
import {  RouterProvider } from 'react-router-dom'
import routes from './router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(


    <RouterProvider router={routes} />
)
