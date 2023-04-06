import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../../Api"

export function Loader(){
    return getHostVans()
}

export default function HostVans(){
    const hostVans = useLoaderData()

    const hostVansElement = hostVans && hostVans.map(vanObj => (
        <div key={vanObj.id} >
            <Link
                to={`/host/vans/${vanObj.id}`}
                key={vanObj.id}
                className="host-van-link-wrapper"
            >
                <div className="host-van-single" key={vanObj.id}>
                    <img src={vanObj.imageUrl} alt="" />
                    <div className="host-van-info">
                        <h3>{vanObj.name}</h3>
                        <p>${vanObj.price}/day</p>
                    </div>
                </div>
            </Link>
        </div>
    )) 
    return (
        <div>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    hostVans ? 
                        hostVansElement :
                        <h2>Loading...</h2>
                }
            </div>
        </div>
    )
}