import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect,
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { Loader as vansLoader }from "./pages/Vans/Vans"
import VanDetail, { Loader as vanDetailsLoader } from "./pages/Vans/VanDetails"
import Layout from "./components/Layout"
import Dashboard from './pages/Host/Dashboard'
import Reviews from './pages/Host/Reviews'
import Income from './pages/Host/Income'
import "./server"
import HostLayout from './pages/Host/HostLayout';
import HostVans, { Loader as hostVansLoader } from './pages/Host/Vans/HostVans';
import HostVansDetails, { Loader as hostVansDetailsLoader } from './pages/Host/Vans/HostVansDetails';
import HostVansInfo from './pages/Host/Vans/HostVansInfo';
import HostVansPricing from './pages/Host/Vans/HostVansPricing';
import HostVansPhotos from './pages/Host/Vans/HostVansPhotos';
import Error404page from './pages/404page';
import Error from './components/Error';
import { requireAuth } from './utils/requireAuth';
import Login from './pages/Login';


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />}/>
          <Route 
            path="vans" 
            element={<Vans />} 
            loader={vansLoader}
            errorElement={<Error />}
          /> 
          <Route 
            path="vans/:id" 
            element={<VanDetail />} 
            loader={vanDetailsLoader}
          />
          <Route path="host" element={<HostLayout/>}>
          <Route 
            index
            element={<Dashboard />}
            // loader={async () => await requireAuth()}
          />
            <Route 
              path="income" 
              element={<Income/>}
              loader={async () => {
                return null
              }}
            />
            <Route 
              path="reviews" 
              element={<Reviews/>}
              loader={async () => {
                return null
              }} 
            />
            <Route 
              path="vans" 
              element={<HostVans />}
              loader={hostVansLoader}
            />
            <Route 
              path="vans/:id" 
              element={<HostVansDetails />}
              loader={hostVansDetailsLoader}
            > 
              <Route 
                index 
                element={<HostVansInfo/>}
                loader={async () => {
                  return null
                }}
              />
              <Route 
                path="pricing" 
                element={<HostVansPricing/>}
                loader={async () => {
                  return null
                }}
              />
              <Route 
                path="photos" 
                element={<HostVansPhotos/>}
                loader={async () => {
                  return null
                }}
              />
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

