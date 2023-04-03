import React from "react"
import { useParams,Link,Outlet,NavLink } from "react-router-dom"


export default function HostVansDetails(){
    const {id} = useParams()
    const [currentVan,setCurrentVan] = React.useState(null)
    React.useEffect(()=>{
        fetch(`/api/host/vans/${id}`)
            .then(response => response.json())
            .then(data => setCurrentVan(data.vans))
    },[id])

    const activeStyle ={
        fontWeight: "bold" ,
        textDecoration: "underline" ,
        color: "green"
    }
    const vanELement = currentVan && currentVan.map(vanObj => (
        <div key={vanObj.id}>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >
                &larr; <span>Back to all vans</span>
            </Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                        <img src={vanObj.imageUrl} alt="" />
                        <div className="host-van-detail-info-text">
                            <i
                                className={`van-type van-type-${vanObj.type}`}
                            >
                                {vanObj.type}
                            </i>
                            <h3>{vanObj.name}</h3>
                            <h4>${vanObj.price}/day</h4>
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
                        to={`/host/vans/${vanObj.id}/pricing`}
                        style={({isActive}) => isActive ? activeStyle:null}
                        >
                        Pricing
                    </NavLink>
                    <NavLink 
                        to={`/host/vans/${vanObj.id}/photos`}
                        style={({isActive}) => isActive ? activeStyle:null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ currentVan:currentVan[0] }}/>
            </div>
        </div>
    ))
    return (
        <>
            <div>
                {currentVan ? vanELement : "RUKJAA...."}
            </div>
        </>
    )
}