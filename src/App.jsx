import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { Loader as vansLoader }from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetails"
import Layout from "./components/Layout"
import Dashboard from './pages/Host/Dashboard'
import Reviews from './pages/Host/Reviews'
import Income from './pages/Host/Income'
import "./server"
import HostLayout from './pages/Host/HostLayout';
import HostVans from './pages/Host/Vans/HostVans';
import HostVansDetails from './pages/Host/Vans/HostVansDetails';
import HostVansInfo from './pages/Host/Vans/HostVansInfo';
import HostVansPricing from './pages/Host/Vans/HostVansPricing';
import HostVansPhotos from './pages/Host/Vans/HostVansPhotos';
import Error404page from './pages/404page';
import Error from './components/Error';


const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route 
            path="vans" 
            element={<Vans />} 
            errorElement={<Error />}
            loader={vansLoader}
          />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income/>} />
            <Route path="reviews" element={<Reviews/>} />
            <Route path="vans" element={<HostVans />}/>
            <Route path="vans/:id" element={<HostVansDetails />}> 
              <Route index element={<HostVansInfo/>}/>
              <Route path="pricing" element={<HostVansPricing/>}/>
              <Route path="photos" element={<HostVansPhotos/>}/>
            </Route>
          </Route>
              <Route path="*" element={<Error404page />}/>
          
    </Route>
))

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}
