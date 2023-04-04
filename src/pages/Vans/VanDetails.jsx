import React from "react"
import { useParams,Link,useLocation } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const location = useLocation()
    // console.log(location.state.search) 
    const search = location.state?.search || "" // optional chaining
    const type = location.state?.type || "all" //if loc.state is a thing then give its .search val or|| else give nothing ""

    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])
    
    const vanType = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase() 
    return (
        <div className="van-detail-container">
            <Link
                // ..(parent dir) wont work as all filters will be removed , think of case of airbnb , jisme bahut saare filter laga koi chiz check karke back kara to saare filters hat gae
                to={`..${search}`}
                relative="path"
                className="back-button"
            > 
                &larr; <span>{`Back to ${vanType} vans`}</span>
            </Link>          
            {van ? (
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
            ) : <h2>Loading...</h2>}
        </div>
    )
}