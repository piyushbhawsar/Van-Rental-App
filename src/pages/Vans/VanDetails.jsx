import React from "react"
import { Link,useLocation, useLoaderData } from "react-router-dom"
import { getVans } from "../../Api"

export function Loader({ params }){
    return getVans(params.id)
}

export default function VanDetail() {
    const location = useLocation()

    const search = location.state?.search || "" // optional chaining
    const type = location.state?.type || "all" //if loc.state is a thing then give its .search val or|| else give nothing ""

    const van = useLoaderData()
    
    const vanType = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase() 
    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            > 
                &larr; <span>{`Back to ${vanType} vans`}</span>
            </Link>          
                <div className="van-detail">
                    <img src={van.imageUrl} alt="" />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
        </div>
    )
}