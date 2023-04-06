import React from "react"
import { useParams,Link,Outlet,NavLink, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../../Api"

export function Loader({ params }){
    return getHostVans(params.id)
}

export default function HostVansDetails(){
    const currentVan = useLoaderData()

    const activeStyle ={
        fontWeight: "bold" ,
        textDecoration: "underline" ,
        color: "green"
    }
    const vanELement = <div key={currentVan.id}>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >
                &larr; <span>Back to all vans</span>
            </Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                        <img src={currentVan.imageUrl} alt="" />
                        <div className="host-van-detail-info-text">
                            <i
                                className={`van-type van-type-${currentVan.type}`}
                            >
                                {currentVan.type}
                            </i>
                            <h3>{currentVan.name}</h3>
                            <h4>${currentVan.price}/day</h4>
                        </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink 
                        to={`.`}
                        end
                        style={({isActive}) => isActive ? activeStyle:null}
                        >
                        Details
                    </NavLink>
                    <NavLink 
                        to={`/host/vans/${currentVan.id}/pricing`}
                        style={({isActive}) => isActive ? activeStyle:null}
                        >
                        Pricing
                    </NavLink>
                    <NavLink 
                        to={`/host/vans/${currentVan.id}/photos`}
                        style={({isActive}) => isActive ? activeStyle:null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ currentVan:currentVan }}/>
            </div>
        </div>
    return (
        <>
            <div>
                {currentVan ? vanELement : "RUKJAA...."}
            </div>
        </>
    )
}