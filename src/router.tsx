import { createBrowserRouter } from "react-router-dom"
import AdminLayout from "./components/admin/AdminLayout"
import TripList from "./components/pages/trips/index"
import LayoutDetail from "./components/layouthome/detail/LayoutDetail"
import Cart from "./components/layouthome/Cart"
import LayoutHome from "./components/layouthome/LayoutHome"
import HomePage from "./components/layouthome/home/LayoutHome"
import Add from "./components/pages/trips/add"
import { getBusHouses } from "./api/busHouse.api"
import { getTripById } from "./api/trips.api"
import UpdateTrip from "./components/pages/trips/update"



const routers = createBrowserRouter([
    {
        path: "/",
        element: <LayoutHome /> ,
        children: [
            {
                path: "/home",
                element: <HomePage />
            },
            {
                path: "/detail",
                element: <LayoutDetail />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout /> ,
        children: [
            {
                path: "dashboard",
                element: <h1>Dashboard</h1>
            },
            {
                path: "trips",
                element: <TripList />
            },
            {
                path: "trips/add",
                loader: async()=>{
                    const {data} = await getBusHouses();
                    return data;
                },
                element: <Add />
            },
            {
                path: "trips/:id",
                loader: async( {params})=>{
                    const {data:busHouse} = await getBusHouses();
                    if(params.id){
                    const {data:trip} = await getTripById(params.id);
                    return {trip,busHouse}
                    }
                    return {busHouse};
                },
                element: <UpdateTrip />
            }
        ]
    }
])

export default routers